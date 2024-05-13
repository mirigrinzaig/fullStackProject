import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./carousel.css"

const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow:6, 
    slidesToScroll: 1
  };

const Carousel = () => {
  return (
    <Slider className='carousel' {...settings}>
      <div>
        <img src="./companiesLogo/avent.png" alt="Image 1" />
      </div>
      <div>
        <img src="./companiesLogo/B.png" alt="Image 2" />
      </div>
      <div>
        <img src="./companiesLogo/baby_einstein.png" alt="Image 3" />
      </div>
      <div>
        <img src="./companiesLogo/babybjorn.png" alt="Image 1" />
      </div>
      <div>
        <img src="./companiesLogo/cybex.png" alt="Image 2" />
      </div>
      <div>
        <img src="./companiesLogo/disnep.png" alt="Image 3" />
      </div>
      {/* Add more images as needed */}
    </Slider>
  );
}

export default Carousel;
