import Navbar   from './components/Navbar'
import Hero     from './components/Hero'
import Services from './components/Services'
import Slideshow from './components/Slideshow'
import About    from './components/About'
import Contact  from './components/Contact'
import Footer   from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        {/* 1. Hero — primera impresión */}
        <Hero />

        {/* 2. Servicios */}
        <Services />

        {/* 3. Galería — slideshow con rocio1-6.png */}
        <Slideshow />

        {/* 4. Sobre mí */}
        <About />

        {/* 5. Contacto */}
        <Contact />
      </main>
      <Footer />
    </>
  )
}