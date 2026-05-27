import Hero from './components/Hero'
import Services from './components/Services'
import Features from './components/Features'
import Markets from './components/Markets'
import About from './components/About'
import Contact from './components/Contact'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Services />
      <Features />
      <Markets />
      <About />
      <Contact />
    </main>
  )
}
