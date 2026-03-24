
import Itinerary from "./components/Itinerary/Itinerary"
import Contact from "./components/ContactUs/Contact"
import Footer from "./components/Footer/Footer"
import Gallary from "./components/Gallary/Gallary"
import HeroSection from "./components/HeroSection/HeroSection"
import Navbar from "./components/Navbar/Navbar"
import TrekCarousel3D from "./components/TrekCarousel/TrekCarousel3D";
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs"
import Testimonials from "./components/Testimonials/Testimonials"
import FAQ from "./components/Faq/Faq"
import WhatsAppFloat from "./components/WhatsappFloat/WhatsappFloat"



function App() {
  

  return (
    <>
    <Navbar/>
    <HeroSection/>
    <TrekCarousel3D/>
    <WhyChooseUs/>
    <Gallary/>
    <Itinerary/>
    <Testimonials/>
    <FAQ/>
    <Contact/>
    <Footer/>
    <WhatsAppFloat/>
    </>
  )
}

export default App
