#!/bin/bash

# ==============================================================================
# DEPLOYMENT-SCRIPT FÜR NEXT.JS (STATIC EXPORT)
# ==============================================================================
# Dieses Script baut dein Next.js-Projekt lokal und überträgt die statischen
# HTML/CSS/JS-Dateien direkt auf deinen Hetzner-Server.
# Es setzt danach die korrekten Rechte (Besitzer/Gruppe www:www) und Dateiberechtigungen.
#
# Wichtig: Es nutzt deinen konfigurierten SSH-Alias 'hetzner' und lädt die
# Dateien direkt in dein bestehendes Web-Verzeichnis hoch (keine Nginx-Änderung nötig).
# ==============================================================================

# Strict Mode: Script bricht sofort ab, wenn ein Fehler auftritt
set -euo pipefail

# --- FARBEN FÜR CLI AUSGABE ---
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
BLUE='\033[0;34m'
BOLD='\033[1m'
NC='\033[0m' # No Color

log_info() { echo -e "${BLUE}[INFO]${NC} $1"; }
log_success() { echo -e "${GREEN}[ERFOLG]${NC} ${BOLD}$1${NC}"; }
log_warn() { echo -e "${YELLOW}[WARNUNG]${NC} $1"; }
log_error() { echo -e "${RED}[FEHLER]${NC} ${BOLD}$1${NC}" >&2; }

# --- KONFIGURATION ---
# Passe REMOTE_DIR an, falls dein Verzeichnis auf dem Server anders heißt!
SSH_ALIAS="hetzner"                       # Dein SSH-Alias aus der ~/.ssh/config
REMOTE_DIR="/www/wwwroot/sotkiosk.com/out"  # OpenLiteSpeed-Webroot (aaPanel)
OWNER="www"                              # Webserver-Besitzer (z. B. www oder www-data)
GROUP="www"                              # Webserver-Gruppe (z. B. www oder www-data)
USE_SUDO="false"                         # Auf 'true' setzen, falls chown/chmod sudo benötigt (bei root-Login meist 'false')

# Lokale Pfade
LOCAL_BUILD_DIR="out"                    # Next.js exportiert standardmäßig in "out"

# --- SYSTEM-CHECK ---
check_prerequisites() {
  log_info "Prüfe lokale Voraussetzungen..."
  
  for cmd in node npm rsync ssh; do
    if ! command -v "$cmd" &> /dev/null; then
      log_error "Erforderliches Tool '$cmd' ist lokal nicht installiert. Bitte installieren!"
      exit 1
    fi
  done
  
  # Prüfen, ob der SSH-Alias funktioniert
  log_info "Prüfe SSH-Verbindung zu '$SSH_ALIAS'..."
  if ! ssh -q -o ConnectTimeout=5 "$SSH_ALIAS" exit; then
    log_error "Verbindung zu SSH-Alias '$SSH_ALIAS' fehlgeschlagen! Existiert der Alias in ~/.ssh/config?"
    exit 1
  fi
  
  log_success "System-Check erfolgreich."
}

# --- GIT CHECK ---
check_git_status() {
  if [ -d .git ] && command -v git &> /dev/null; then
    if ! git diff-index --quiet HEAD --; then
      log_warn "Es gibt ungespeicherte Änderungen in Git!"
      read -p "Möchtest du trotzdem fortfahren? (y/n) " -n 1 -r
      echo
      if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        log_info "Deployment abgebrochen."
        exit 1
      fi
    fi
  fi
}

# --- LOKALER BUILD ---
build_locally() {
  log_info "Starte lokalen Build-Prozess..."
  
  # Dependencies installieren
  # --legacy-peer-deps wegen vaul/Radix UI mit React 19 (offizieller Workaround)
  log_info "Installiere npm-Pakete..."
  npm install --legacy-peer-deps
  
  log_info "Bereinige alte Next.js Build-Artefakte..."
  rm -rf .next "$LOCAL_BUILD_DIR"
  
  # Next.js Build ausführen
  log_info "Führe 'npm run build' aus..."
  if ! npm run build; then
    log_error "Der Build-Prozess ist fehlgeschlagen! Deployment wird abgebrochen."
    exit 1
  fi
  
  # Prüfen, ob das Export-Verzeichnis existiert und nicht leer ist
  if [ ! -d "$LOCAL_BUILD_DIR" ] || [ -z "$(ls -A "$LOCAL_BUILD_DIR")" ]; then
    log_error "Das Build-Verzeichnis '$LOCAL_BUILD_DIR' ist leer oder existiert nicht. Überprüfe next.config.js!"
    exit 1
  fi
  
  log_success "Lokaler Build erfolgreich abgeschlossen."
}

# --- REMOTE-COMMAND AUSFÜHREN ---
run_remote() {
  local cmd="$1"
  ssh "$SSH_ALIAS" "$cmd"
}

# --- DEPLOYMENT AUSFÜHREN ---
deploy() {
  # 1. System und Verbindung prüfen
  check_prerequisites
  check_git_status
  
  # 2. Lokaler Build erstellen
  build_locally
  
  # 3. Zielverzeichnis auf dem Server vorbereiten
  log_info "Bereite Zielverzeichnis auf dem Server vor..."
  run_remote "mkdir -p $REMOTE_DIR"
  
  # 4. Dateien übertragen (rsync)
  log_info "Übertrage Dateien direkt auf den Server via rsync..."
  # -a: Archivmodus (Rechte behalten, rekursiv)
  # -v: Verbose (Details anzeigen)
  # -z: Komprimierung während der Übertragung
  # --delete: Löscht verwaiste Dateien im Ziel (damit alte Assets verschwinden)
  if ! rsync -avzh --delete -e "ssh" "./$LOCAL_BUILD_DIR/" "$SSH_ALIAS:$REMOTE_DIR/"; then
    log_error "Übertragung fehlgeschlagen!"
    exit 1
  fi
  
  # 5. Rechte setzen und Besitzer anpassen (www:www)
  log_info "Setze Dateirechte und Besitzer ($OWNER:$GROUP) auf dem Server..."
  
  local SUDO_PREFIX=""
  if [ "$USE_SUDO" = "true" ]; then
    SUDO_PREFIX="sudo "
  fi
  
  # Befehlskette für den Server:
  # - Besitzer auf www:www ändern
  # - Ordnerrechte auf 755 setzen (jeder darf lesen/betreten, nur Besitzer schreiben)
  # - Dateirechte auf 644 setzen (jeder darf lesen, nur Besitzer schreiben)
  local PERMISSION_COMMANDS="
    $SUDO_PREFIX chown -R $OWNER:$GROUP $REMOTE_DIR && \
    $SUDO_PREFIX find $REMOTE_DIR -type d -exec chmod 755 {} + && \
    $SUDO_PREFIX find $REMOTE_DIR -type f -exec chmod 644 {} +
  "
  
  if ! run_remote "$PERMISSION_COMMANDS"; then
    log_warn "Fehler beim Setzen der Rechte auf dem Server. Bitte Berechtigungen manuell prüfen!"
  else
    log_success "Rechte und Besitzer erfolgreich auf '$OWNER:$GROUP' und Dateirechte (755/644) gesetzt."
  fi
  
  log_success "Deployment ERFOLGREICH abgeschlossen!"
  echo -e "Die Änderungen sind nun live auf deinem Hetzner-Server!"
}

# Starte das Deployment
deploy
