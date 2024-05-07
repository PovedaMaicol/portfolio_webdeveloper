import React, { useState } from 'react';
import './styles/inicio.css';
import prof from '/public/img/ImagenEnPixel.jpeg'
import ing from '/public/img/reino-unido.png'
import esp from '/public/img/espana.png'
import Typed from 'typed.js';
import { useTranslation } from "react-i18next";
import BarraLateral from './BarraLateral';


const body = document.querySelector('body');
// const modo = document.querySelector('btn-mode2 i');




const Inicio = () => {
    const el = React.useRef(null);
    const [isStarred, setIsStarred] = useState(true);
    const handleIcon = () => {
      setIsStarred(!isStarred)
    };
   
  
    React.useEffect(() => {
      
    
      const typed = new Typed(el.current, {
        strings: [`I'm Maicol`],
        typeSpeed: 180,
      });
      return () => {
        typed.destroy();
      };
    }, []);

    const [t, i18n] = useTranslation("global");


    

    const handleDark = () => {
   
      if(body){
        body.classList.toggle('dark')  
      
       
      }
    }

  
    const handleLanguaje = () => {
      i18n.changeLanguage("es")
  
    }
  
    const handleLanguajeEn = () => {
      i18n.changeLanguage("en")
    }
  
  
  
  
 


  return (
   
    <div id="inicio" className='home-container container'>
      <div className='cont-barra'>
        <BarraLateral/>
      </div>

<nav className='change-mode-container'>

<button className='btn-mode2' onClick={handleDark}><i  onClick={handleIcon} className={isStarred ? "bx bxs-sun bx-border-circle" : "bx bxs-moon bx-border-circle"}></i></button>

<div className='translate-container'>
<button className='btn-mode' onClick={handleLanguaje}><img src={esp}/></button>

<button className='btn-mode' onClick={handleLanguajeEn}><img src={ing}/></button>
</div>




</nav>
   
        
  <div className='container_todo'>
    
  <br/>
      <figure className='img-container'>
        <img src={prof} alt='100' height='auto' width='auto'/>
      </figure>
   
     
     
      <div className='contenedor-title'>
      <br/>
      <h1 className='txt-hello'>{t("home.hello")}</h1>
      <h1><span ref={el}></span></h1>
      <br/>
        
        <p>{t("home.text")}</p>
      
        </div>
        </div>

<div className='enlaces'>
<a>{t("home.web-developer")}<i className='bx bx-download' ></i></a>
<a href='https://www.behance.net/maicolvillami' target='_blank'>{t("home.web-designer")}<i className='bx bx-code' ></i></a>
</div>
       
    </div>

  )
}

export default Inicio;