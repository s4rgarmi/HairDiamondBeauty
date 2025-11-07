import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Gallery from './components/Gallery.jsx'
import Faq from './components/Faq.jsx'
import SectionDivider from './components/SectionDivider.jsx'
import Services from './components/Services.jsx'

const App = () => {
  return (
    <div className="bg-porcelain text-charcoal">
      <Header />
      <main id="main-content" className="flex min-h-screen flex-col pt-20">
        <Hero />
        <SectionDivider />
        <About />
        <SectionDivider />
        <Gallery />
        <SectionDivider />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
