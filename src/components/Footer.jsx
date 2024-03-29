import React from 'react';
import './styles/footer.css';
import { useTranslation } from "react-i18next";

const Footer = () => {
  const [t, i18n] = useTranslation("global");
  return (
  <div className='footer_cont container'>


    <div className='info_container'>
 <section className='form'>      
<div className="content-form">
<h3 className="txt-descriptivo">{t("footer.contactme")}</h3>
<p className="contacts-txt">{t("footer.t")}</p>
<input className="contacts-register" type="text" id="name" name="name" placeholder={t("footer.name")}></input>
<input className="contacts-register" type="email" id="email" name="email" placeholder={t("footer.email")}></input>
<textarea className="contacts-register" type="messaje" id="messaje" name="messaje" rows="4"
placeholder={t("footer.message")}></textarea>
<input className="button-send" type="submit" value={t("footer.send")}></input>
</div>
</section> 
<br/>



<div id='contact' className='info_container_2'>

<ul className='info_contact'>
<li className="contacts-list"><i className='bx bx-mobile-alt'></i>
<h3 className="contacts-subtitles">+57 319 722 8443</h3>
</li>

<li className="contacts-list"><i className='bx bx-envelope'></i>
    <h3 className="contacts-subtitles">stivsal12@gmail.com</h3>
</li>
<li className="contacts-list"><i className='bx bx-map'></i>
    <h3 className="contacts-subtitles">Barbosa, Santander</h3>
</li>

</ul>

<br/>


<ul className="footer-contacts">
                        <li className="footer-item"><a href="https://wa.link/iesfcf" target='_blank'><i
                                    className='bx bxl-whatsapp'></i></a></li>
                        <li className="footer-item"><a href="https://www.behance.net/maicolvillami" target='blank'><i
                                    className='bx bxl-behance'></i></a></li>
                        <li className="footer-item"><a href="https://github.com/PovedaMaicol" target='blank'><i
                                    className='bx bxl-github'></i></a></li>
                        <li className="footer-item"><a
                                href="https://www.linkedin.com/in/maicol-salazar-7040b4299/" target='blank'><i
                                    className='bx bxl-linkedin-square'></i></a></li>
                    </ul>

                    </div>
                    </div>

                    <br/>

                    </div>

        
   
  )
}

export default Footer