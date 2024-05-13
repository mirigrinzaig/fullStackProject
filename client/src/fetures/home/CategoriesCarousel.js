import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./carousel.css"

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="slick-arrow slick-next" onClick={onClick}>
    </div>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="slick-arrow slick-prev" onClick={onClick}>
    </div>
  );
};

const settings = {
  // dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 8,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />

};

const CategoriesCarousel = () => {
  return (
    <div className="carouselWrapper">
      <Slider className='carousel' {...settings}>
        <div className='carouselImgDiv'>
          <img src="./categories/accessories.png" alt="Image 1" />
        </div>
        <div className='carouselImgDiv'>
          <img src="./categories/bath.png" alt="Image 1" />
        </div>
        <div className='carouselImgDiv'>
          <img src="./categories/brands.png" alt="Image 1" />
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
        <div className='carouselImgDiv'>
          <img src="./categories/play.png" alt="Image 1" />
        </div>
        <div className='carouselImgDiv'>
          <img src="./categories/presents.png" alt="Image 2" />
        </div>
        <div className='carouselImgDiv'>
          <img src="./categories/safe.png" alt="Image 3" />
        </div>
        <div className='carouselImgDiv'>
          <img src="./categories/walk.png" alt="Image 1" />
        </div>
      </Slider>
    </div>
  );
}

export default CategoriesCarousel;
