import React from 'react'
import './styles/portfolio.css'
import CardPortfolio from './CardPortfolio'



const Portfolio = ( props ) => {
  return (
    <div className='portfolio-container container'>
        <h3>Web Design / Front-end Developer / Back-end Developer</h3>
        <br/>

<div className='portfolio-grid'>
<CardPortfolio 
url='https://pokeeddex.netlify.app/'
img_port='/img/pokeapi.png'
li1='HTML'
li2='CSS'
li3='JavaScript'
li4='React'
/>
<br/>
<CardPortfolio
url='https://rickandmorty33.netlify.app'
img_port='/img/rickmorty.png'
li1='HTML'
li2='CSS'
li3='JavaScript'
li4='React'
/>
<br/>

<CardPortfolio
url='https://tourmaline-fudge-f10320.netlify.app'
img_port='/img/ecomerce.png'
li1='HTML'
li2='CSS'
li3='JavaScript'
li4='React'
/>


</div>
     
    </div>
  )
}

export default Portfolio