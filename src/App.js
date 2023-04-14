import React from 'react'
import './app.css'
import Footer from './Components/Footer/Footer'
import Home from './Components/Home/Home'
import Main from './Components/Main/Main'
import Navbar from './Components/Navbar/Navbar'
import Ab from './Components/About/Ab'
import Pocetna from './Pages/Pocetna'
import {BrowserRouter, Route, Routes} from "react-router-dom";


const App = () => {
  return (
    <BrowserRouter>
      
      <Navbar/>
      
      <Routes>
        
        <Route path='/' element={<Pocetna/>}></Route>
        
        <Route path='/about' element={<Ab/>}></Route>
        
      </Routes> 

    <Footer/>
      
    </BrowserRouter>
    /*<>
    <Navbar/>
    <Home/>
    <Main/>
    <Footer/>
    </>*/
  )
}

export default App