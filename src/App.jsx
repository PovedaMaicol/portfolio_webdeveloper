import './App.css'
import Footer from './components/Footer'
import Habilities from './components/Habilities'
import HeaderNav from './components/HeaderNav'
import Inicio from './components/Inicio'
import Portfolio from './components/Portfolio'
import Skills from './components/Skills'
import { useTranslation } from "react-i18next";
function App() {


  return (
    <div className='container_principal'>
    <HeaderNav/>
    <Inicio/>
    <br/>
    <br/>
    <Skills/>
    <br/>
     <Portfolio/>
     <br/>
     <br/>
     <Habilities/>
     <br/>
     <br/>
     <Footer/>
    </div>
  )
}

export default App
