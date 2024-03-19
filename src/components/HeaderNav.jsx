import React from 'react';
import './styles/headerNav.css';
import { useTranslation } from "react-i18next";
const mostrar = document.querySelector('.menu')
const body = document.querySelector('body')



const HeaderNav = () => {

  const handleMenu = () => {
    if(mostrar) {
 mostrar.classList.toggle('show-menu');
 console.log('menu-activado')
    }
   
  }
  const [t, i18n] = useTranslation("global");



  return (
    <header className='container'>
        <nav className='navbar'>
        <h2>MS<span>.</span></h2>
        
        <div className='menu'>
        <ul className='menu-list'>
            <li className='menu-item'>01. <span>{t("header.about-me")}</span></li>
            <li className='menu-item'>02. <span>{t("header.skills")}</span></li>
            <li className='menu-item'>03. <span>{t("header.projects")}</span></li>
            <li className='menu-item'>04. <span>{t("header.contact")}</span></li>
            <button>{t("header.resume")}</button>
        </ul>
        </div>
        
        <button className='btn-open' type='button' aria-label='abrir menu' onClick={handleMenu}>
        <i className='bx bx-menu nav-icon'></i>
        </button>

       
        </nav>
       
        
        
    </header>

  )
}

export default HeaderNav