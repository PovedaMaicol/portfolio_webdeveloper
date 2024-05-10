import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Habilities from './components/Habilities'
import HeaderNav from './components/HeaderNav'
import Inicio from './components/Inicio'
import Portfolio from './components/Portfolio'
import Skills from './components/Skills'
// import MoreProyects from './components/MoreProyects'
import ProyectsPage from './pages/ProyectsPage'
import HomePage from './pages/HomePage'
// import { HashRouter, Routes, Route } from 

function App() {

const router = 'react-router-dom';

  return (
  
       <div className='container_principal'>
      <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/projects' element={<ProyectsPage/>} />
      </Routes>


    {/* <HeaderNav/>
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
     <Footer/> */}

   
    </div>

   
  )
}

export default App
