import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ExperienceTimeline from './components/Experience'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <ExperienceTimeline/>
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}