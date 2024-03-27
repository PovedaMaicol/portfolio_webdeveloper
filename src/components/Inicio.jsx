import React from 'react';
import './styles/inicio.css';
import prof from '/public/img/ImagenEnPixel.jpeg'
import Typed from 'typed.js';
import { useTranslation } from "react-i18next";

const body = document.querySelector('body');
const modo = document.querySelector('.btn-mode2 i');




const Inicio = () => {
    const el = React.useRef(null);
   
  
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
        modo.classList.toggle('bxs-sun')
       
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
      

<nav className='change-mode-container'>

<button className='btn-mode2' onClick={handleDark}><i className="bx bxs-moon"></i></button>

<div className='translate-container'>
<button className='btn-mode' onClick={handleLanguaje}>ES</button>
<span>|</span>
<button className='btn-mode' onClick={handleLanguajeEn}>EN</button>
</div>




</nav>
   
        
  <div className='container_todo'>
    
      
      <figure className='img-container'>
        <img src={prof} alt='100' height='auto' width='auto'/>
      </figure>
   
     
     
      <div className='contenedor-title'>
      <h1>{t("home.hello")}</h1>
      <h1><span ref={el}></span></h1>
      <br/>
        
        <p>{t("home.text")}</p>
      
        </div>
        </div>

<div className='enlaces'>
<a>{t("home.web-developer")}<i className='bx bx-download' ></i></a>
<a>{t("home.web-designer")}<i className='bx bx-code' ></i></a>
</div>
       
    </div>
  )
}

export default Inicio;