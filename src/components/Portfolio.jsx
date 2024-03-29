import React from 'react'
import './styles/portfolio.css'
import CardPortfolio from './CardPortfolio'
import { useTranslation } from "react-i18next";



const Portfolio = ( props ) => {
  const [t, i18n] = useTranslation("global");
  return (
    <div className='portfolio-container container'>
        <h3>{t("projects.web-design")}</h3>
        <br/>

<div id="proyects" className='portfolio-grid'>
<CardPortfolio 
project_name='Pokedex'
project_description={t("projects.description1")}
url='https://pokeeddex.netlify.app/'
urg='https://github.com/PovedaMaicol/pokedex'
img_port='/img/pokeapi.png'
li1='HTML'
li2='CSS'
li3='JavaScript'
li4='React'
/>
<br/>
<CardPortfolio
project_name='Rick and Morty'
project_description={t("projects.description2")}
url='https://rickandmorty33.netlify.app'
urg='https://github.com/PovedaMaicol/Rick-and-Morty---React'
img_port='/img/rickmorty.png'
li1='React'
li2='useForm'
li3='Axios'
li4='CSS'
/>
<br/>

<CardPortfolio
project_name='E-commerce'
project_description={t("projects.description3")}
url='https://tourmaline-fudge-f10320.netlify.app'
urg='https://github.com/PovedaMaicol/e-comerce'
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