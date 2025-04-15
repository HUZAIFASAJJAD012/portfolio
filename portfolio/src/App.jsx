import AboutUs from "./Components/AboutUs"
import ContectUs from "./Components/ContectUs"
import Footer from "./Components/Footer"
import Team from "./Components/Hero"
import NavBar from "./Components/Navbar"
import Project from "./Components/Project"


function App() {
  return (
  <div className="min-h-screen ">
    <div className="fixed top-0 -z-10 min-h-screen w-full bg-gradient-to-r from-blue-950 via-blue-800 to-blue-950  ">
    
    </div>
    <NavBar/>
    <AboutUs/>
    <Team/>
    <Project/>
    
    <ContectUs/>
    <Footer/>
  </div>
  )
}

export default App
