import React, {useRef, useState} from 'react';
import './styles/footer.css';
import { useTranslation } from "react-i18next";
import emailjs from '@emailjs/browser';

const Footer = () => {
  // translate
  const [t, i18n] = useTranslation("global");
  // formulario
  const form = useRef();
  // mostrar mensaje
  const [showMessage, setIsShowMessage] = useState(false);


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_xzul74k', 'template_d8hakac', form.current, {
        publicKey: 'd-nqlcfP9XcmllwWV',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );

      setIsShowMessage(true);
      setTimeout(() => {
        setIsShowMessage(false);
      }, 3000);
  };



  return (
  <div className='footer_cont container'>


    <div className='info_container'>


<form ref={form} onSubmit={sendEmail} className='form'> 

<div className={`msjSend ${showMessage ? 'visible' : 'hidden'}`}><i className='bx bx-mail-send'></i><h2>{t("footer.alert")}</h2></div>

<div className="content-form">
<h3 className="txt-descriptivo">{t("footer.contactme")}</h3>
<p className="contacts-txt">{t("footer.t")}</p>

      <input className="contacts-register" type="text" name="user_name" placeholder={t("footer.name")}/>
      
      <input className="contacts-register" type="email" name="user_email" placeholder={t("footer.email")}/>
     
      <textarea className="contacts-register" name="message" placeholder={t("footer.message")}/>
      <button className="button-send" type="submit" value="Send">{t("footer.send")}</button>  
</div>  
</form> 
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
    <h3 className="contacts-subtitles">Colombia</h3>
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