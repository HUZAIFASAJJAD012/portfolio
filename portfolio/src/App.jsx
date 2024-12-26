import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import About from './pages/About'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Contact from './pages/Contact'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   {/* <Navbar/> */}
   
  {/* <About/> */}
  <Contact></Contact>

    </>
  )
}

export default App
