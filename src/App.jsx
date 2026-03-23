
import Itinerary from "./components/Itinerary/Itinerary"
import Contact from "./components/ContactUs/Contact"
import Footer from "./components/Footer/Footer"
import Gallary from "./components/Gallary/Gallary"
import HeroSection from "./components/HeroSection/HeroSection"
import Navbar from "./components/navbar/Navbar"
import TrekCarousel3D from "./components/Trekcarousel/Trekcarousel3d"


function App() {
  

  return (
    <>
    <Navbar/>
    <HeroSection/>
    <TrekCarousel3D/>
    <Gallary/>
    <Itinerary/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App
