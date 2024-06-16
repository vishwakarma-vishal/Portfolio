import { useState } from 'react'
import './App.css'
import Header from "./component/Header/Header.jsx";
import Home from './component/Home/Home';
import About from './component/About/About';
import Skills from './component/Skills/Skills';
import Services from './component/Services/Services';
import Qualification from './component/Qualification/Qualification';
import Testimonials from './component/Testimonials/Testimonials';
import Contact from './component/Contact/Contact';

function App() {

  return (
    <div>
      <Header/>
      
      <Home/>
      <About/>
      <Skills/>
      <Services/>
      <Qualification/>
      <Testimonials/>
      <Contact/>
    </div>
  )
}

export default App