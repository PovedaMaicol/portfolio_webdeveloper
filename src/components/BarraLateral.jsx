import React from "react";
import './styles/barraLateral.css'

const BarraLateral = () => {
    return (
<ul className="barra-lat">
    <li><a href="https://wa.link/iesfcf" target='_blank'><i className='bx bxl-whatsapp'></i></a></li>
    <li><a href="https://github.com/PovedaMaicol" target='blank'><i className='bx bxl-github'></i></a></li>
    <li><a href="https://www.linkedin.com/in/maicol-salazar-7040b4299/" target='blank'><i className='bx bxl-linkedin-square'></i></a></li>
    <li><a href="https://www.behance.net/maicolvillami" target='blank'><i
    className='bx bxl-behance'></i></a></li>

</ul>
    )
}

export default BarraLateral