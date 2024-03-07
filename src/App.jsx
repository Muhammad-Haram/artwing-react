import './App.css'
import Navbar from './Components/Navbar'
import Drop from './Components/Drop'
import Footer from './Components/Footer'
import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Mainhome from './Components/Mainhome'
import Aboutmain from './Components/Aboutmain'
import Ourservices from './Components/Oursevices'
import Ourportfolio from './Components/Ourportfolio'
import Ourcontact from './Components/Ourcontact'

function App() {

  const [cursorX, setcursorX] = useState()
  const [cursorY, setcursorY] = useState()
  const [cursor, setcursor] = useState(false)

  window.addEventListener('mousemove', (e) => {
    setcursorX(e.x);
    setcursorY(e.y);
  })

  return (
    <>
      <div className={cursor ? 'cursor color' : 'cursor'} style={{
        left: cursorX + "px",
        top: cursorY + "px"
      }}></div>

      <Navbar />
      <Routes>
        <Route path='/' element={<Mainhome />} />
        <Route path='/Aboutmain' element={<Aboutmain />} />
        <Route path='/OurServices' element={<Ourservices />} />
        <Route path='/Ourportfolio' element={<Ourportfolio />} />
        <Route path='/Ourcontact' element={<Ourcontact />} />
      </Routes>
      <Drop />
      <Footer />
    </>
  )
}

export default App
