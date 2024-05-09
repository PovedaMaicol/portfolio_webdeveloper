import { HashRouter, Route } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Habilities from './components/Habilities'
import HeaderNav from './components/HeaderNav'
import Inicio from './components/Inicio'
import Portfolio from './components/Portfolio'
import Skills from './components/Skills'
import MoreProyects from './components/MoreProyects'
// import { HashRouter, Routes, Route } from 

function App() {

const router = 'react-router-dom';

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
   
     {/* <HashRouter>
      <Routes>
        <Route path='proyects' element={<MoreProyects/>>}/>
      </Routes>
     </HashRouter> */}

     <Habilities/>
     <br/>
     <br/>
     <Footer/>
    </div>

   
  )
}

export default App
