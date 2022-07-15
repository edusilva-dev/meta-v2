import AboutUs from './components/about-us/AboutUs'
import Banner from './components/banner/Banner'
import Contact from './components/contact/Contact'
import Events from './components/events/Events'
import Footer from './components/footer/Footer'
import Header from 'src/components/header/Header'
import Services from './components/services/Services'
import { useEffect, useState } from 'react'

function App() {
  const [windowWidth, setWindowWidth] = useState<number>(0)

  useEffect(() => {
    updateDimensions()

    window.addEventListener('resize', updateDimensions)
    return () => window.removeEventListener('resize', updateDimensions)
  }, [])

  const updateDimensions = () => {
    const width = window.innerWidth
    setWindowWidth(width)
  }

  return (
    <>
      <Header windowWidth={windowWidth} />

      <main>
        <Banner />

        <AboutUs windowWidth={windowWidth} />

        <Services />

        <Events />

        <Contact />
      </main>

      <Footer />
    </>
  )
}

export default App
