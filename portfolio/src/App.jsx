<<<<<<< Updated upstream
import About from './pages/About'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'
import Contact from './pages/Contact'
import {Routes,Route} from 'react-router-dom'
import Portfolio from './components/Portfolio'
function App() {

  return (
    <>
  
  <Routes>
    <Route path='/' element ={ <>
    <Hero/>
    <Portfolio/>
    <About/>
    <Contact/>
   
    </>}
    />
    <Route path='/about' element={<> <Navbar/> <About/></>}/>
    <Route path='/contact' element={ <> <Navbar/><Contact/> </>}/>
    <Route path='/portfolio' element={ <><Navbar/><Portfolio/> </>}/>
  </Routes>
  <Footer/>
=======
import Navbar from './components/Navbar'
import Navbar2 from './components/Navbar2'


function App() {
 
  return (
    <>
      <Navbar/>
      <Navbar2/>
>>>>>>> Stashed changes
    </>
  )
}

export default App
