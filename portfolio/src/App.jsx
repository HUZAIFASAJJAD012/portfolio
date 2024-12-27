import About from './pages/About'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'
import Contact from './pages/Contact'
import {Routes,Route} from 'react-router-dom'
function App() {

  return (
    <>
  
  <Routes>
    <Route path='/' element ={ <>
    <Hero/>
    <About/>
    <Contact/>
   
    </>}
    />
    <Route path='/about' element={<> <Navbar/> <About/></>}/>
    <Route path='/contact' element={ <> <Navbar/><Contact/> </>}/>
  </Routes>
  <Footer/>
    </>
  )
}

export default App
