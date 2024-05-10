import React from 'react'
import HeaderNav from '../components/HeaderNav'
import Inicio from '../components/Inicio'
import Skills from '../components/Skills'
import Portfolio from '../components/Portfolio'
import Habilities from '../components/Habilities'
import Footer from '../components/Footer'

const HomePage = () => {
  return (
    <div>
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

export default HomePage