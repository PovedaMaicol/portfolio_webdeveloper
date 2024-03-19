import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from 'react'
import Slider from "react-slick";
import "./styles/skills.css"


const Skills = () => {

        const settings = {
          className: "center",
          centerMode: true,
          infinite: true,
          centerPadding: "60px",
          slidesToShow: 3,
          speed: 500
        };
  return (
    <div className="skill-container container">
    <hr/>
   <div className="slider-container">
      <Slider {...settings}>
        <div>
          <h3><i className='bx bxl-netlify'></i></h3>
        </div>
        <div>
          <h3><i className='bx bxl-react' ></i></h3>
        </div>
        <div>
          <h3><i className='bx bxl-javascript' ></i></h3>
        </div>
        <div>
          <h3><i className='bx bxl-html5' ></i></h3>
        </div>
        <div>
          <h3><i className='bx bxl-css3' ></i></h3>
        </div>
        <div>
          <h3><i className='bx bxl-git' ></i></h3>
        </div>
        <div>
          <h3><i className='bx bxl-figma'></i></h3>
        </div>
        <div>
          <h3><i className='bx bxl-codepen' ></i></h3>
        </div>
        <div>
          <h3><i className='bx bxl-bootstrap' ></i></h3>
        </div>
        <div>
          <h3><i className='bx bxl-jquery' ></i></h3>

        </div>

        
        
        
      </Slider>
    </div>
    
    <hr/>
    </div>
  );
  
}

export default Skills;