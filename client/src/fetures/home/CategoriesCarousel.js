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

const CategoriesCarousel = () => {
  return (
    <Slider className='carousel' {...settings}>
      <div className='carouselImgDiv'>
        <img src="./categories/accessories.png" alt="Image 1" />
      </div>
      <div className='carouselImgDiv'>
        <img src="./categories/walk.png" alt="Image 2" />
      </div>
      <div className='carouselImgDiv'>
        <img src="./categories/safe.png" alt="Image 3" />
      </div>
      <div className='carouselImgDiv'>
        <img src="./categories/clothing.png" alt="Image 1" />
      </div>
      <div className='carouselImgDiv'>
        <img src="./categories/feed.png" alt="Image 2" />
      </div>
      <div className='carouselImgDiv'>
        <img src="./categories/hygine.png" alt="Image 3" />
      </div>
      {/* Add more images as needed */}
    </Slider>
  );
}

export default CategoriesCarousel;
