import React from 'react'
import './styles/cardPortfolio.css'


const CardPortfolio = ({img_port,li1, li2, li3, li4, url}) => {

  const redirectExternalUrl = () => {
    window.open(url, '_blank');
  }

  return (
    <figure className='portfolio-proyect'>
    <img src={img_port}/>

    <ul className='buttons-card' onClick={redirectExternalUrl} >
        <li><i className='bx bx-radio-circle-marked green' onClick={redirectExternalUrl}></i><h4>{li1}</h4></li>
        <li><i className='bx bx-radio-circle-marked red' ></i><h4>{li2}</h4></li>
        <li><i className='bx bx-radio-circle-marked orange' ></i><h4>{li3}</h4></li>
        <li><i className='bx bx-radio-circle-marked blue' ></i><h4>{li4}</h4></li>

    </ul>
</figure>
  )
}

export default CardPortfolio