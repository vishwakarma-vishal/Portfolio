import { useState } from 'react'
import './App.css'
import Header from "./component/Header/Header.jsx";
import Home from './component/Home/Home';
import About from './component/About/About';
import Skills from './component/Skills/Skills';
import Services from './component/Services/Services';
import Qualification from './component/Qualification/Qualification';
import Testimonials from './component/Testimonials/Testimonials';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header/>
      <Home/>
      <About/>
      <Skills/>
      <Services/>
      <Qualification/>
      <Testimonials/>
    </div>
  )
}

export default App
