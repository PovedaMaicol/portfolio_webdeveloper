import React from 'react'
import './styles/portfolio.css'
import CardPortfolio from './CardPortfolio'
import { useTranslation } from "react-i18next";
import { useState } from 'react';



const Portfolio = ( props ) => {

  const [isViewMore, setIsViewMore] = useState(false);
  const [isMostrarMas, serIsMostrarMas] = useState(true);
  const handleView = () => {
    setIsViewMore(!isViewMore)
    serIsMostrarMas(!isMostrarMas)
    console.log('hola')
  }

 


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
li1='HashRouter'
li2='Axios'
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
li1='Hooks'
li2='Async/await'
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
li1='Provider'
li2='HashRouter'
li3='JavaScript'
li4='Redux'
/>

<CardPortfolio
project_name={t("projects.title4")}
project_description={t("projects.description4")}
url='https://courageous-horse-78e509.netlify.app/'
urg='https://github.com/PovedaMaicol/Weather-App'
img_port='/img/weatherApp.png'
li1='Axios'
li2='useState'
li3='useEffect'
li4='React'
/>

<CardPortfolio 
project_name={t("projects.title5")}
project_description={t("projects.description5")}
url='https://leafy-alpaca-3ed326.netlify.app/'
urg='https://github.com/PovedaMaicol/Users-React'
img_port='/img/crudUsers.png'
li1='CRUD'
li2='Express'
li3='Node.js'
li4='HTTP'
/>

<CardPortfolio
project_name={t("projects.title6")}
project_description={t("projects.description6")}
url='https://effulgent-babka-78800d.netlify.app/'
urg='https://github.com/PovedaMaicol/React--Galleta-de-la-fortuna'
img_port='/img/fortuneCookie.png'
li1='useState'
li2='HTML'
li3='CSS'
li4='REACT'
/>





</div>

{

  isViewMore && (
    <section className='more-proyect portfolio-grid'>
    <CardPortfolio
    project_name={t("projects.title7")}
    project_description={t("projects.description7")}
    url='https://web-developer-portflio.netlify.app/'
    urg='https://github.com/PovedaMaicol/portafolio'
    img_port='/img/portfolio.png'
    li1='HTML'
    li2='CSS'
    li3='boxicons'
    li4='bootstrap'
    />
    <CardPortfolio
    project_name={t("projects.title8")}
    project_description={t("projects.description8")}
    url='https://gorgeous-tiramisu-c6374b.netlify.app/'
    urg='https://github.com/PovedaMaicol/ContadorReact'
    img_port='/img/counter.png'
    li1='CSS'
    li2='useState'
    li3='React'
    li4='HTML'
    />  

    <CardPortfolio
    project_name={t("projects.title9")}
    project_description={t("projects.description9")}
    url='https://cheery-pithivier-d9237d.netlify.app/#/login'
    urg='https://github.com/PovedaMaicol/Autenticaci-n'
    img_port='/img/autenticacion.png'
    li1='sequelize'
    li2='express'
    li3='jsonwebtoken'
    li4='nodemailer'
    />

    <CardPortfolio
    project_name={t("projects.title10")}
    project_description={t("projects.description10")}
    url='https://desplieguedinamico.netlify.app/'
    urg='https://github.com/PovedaMaicol/CountriesDespliege'
    img_port='/img/countries.png'
    li1='hooks'
    li2='useState'
    li3='axios'
    li4='React'
    />
    <CardPortfolio
    project_name='Dinamic fragances'
    project_description='proyecto'
    url='https://deluxe-smakager-332095.netlify.app/'
    urg='https://github.com/PovedaMaicol/Dinamic'
    img_port='/img/dinamic.png'
    li1='jQuery'
    li2='PHP'
    li3='JavaScript'
    li4='HTML/CSS'
    />  

    <CardPortfolio 
    project_name='Freecodecamp Calculator'
    project_description='solve mathematical operations'
    url='https://calculatorfreecc.netlify.app/'
    urg='https://github.com/PovedaMaicol/CalculadoraReactFcc'
    img_port='/img/calculator.png'
    li1='mathjs'
    li2='useState'
    li3='React'
    li4='CSS'
    />
    
  
  </section>
  )

}

     <a className='more' onClick={handleView}>{isMostrarMas ? 'ver mas' : 'ver menos'}</a>
    </div>
  )
}

export default Portfolio