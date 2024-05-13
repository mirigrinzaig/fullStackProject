import React from 'react';
import Slider from 'react-slick';
import { Link } from "react-router-dom"
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
        <Link to="./categories/accessories" className="linkCompany">
          <img src="./categories/accessories.png" alt="Image 1" /></Link>
        </div>
        <div className='carouselImgDiv'>
        <Link to="./categories/bath" className="linkCompany">
          <img src="./categories/bath.png" alt="Image 1" /></Link>
        </div>
        <div className='carouselImgDiv'>
        <Link to="./categories/brands" className="linkCompany">
          <img src="./categories/brands.png" alt="Image 1" /></Link>
        </div>
        <div className='carouselImgDiv'>
        <Link to="./categories/clothing" className="linkCompany">
          <img src="./categories/clothing.png" alt="Image 1" /></Link>
        </div>
        <div className='carouselImgDiv'>
        <Link to="./categories/feed" className="linkCompany">
          <img src="./categories/feed.png" alt="Image 2" /></Link>
        </div>
        <div className='carouselImgDiv'>
        <Link to="./categories/hygine" className="linkCompany">
          <img src="./categories/hygine.png" alt="Image 3" /></Link>
        </div>
        <div className='carouselImgDiv'>
        <Link to="./categories/play" className="linkCompany">
          <img src="./categories/play.png" alt="Image 1" /></Link>
        </div>
        <div className='carouselImgDiv'>
        <Link to="./categories/presents" className="linkCompany">
          <img src="./categories/presents.png" alt="Image 2" /></Link>
        </div>
        <div className='carouselImgDiv'>
        <Link to="./categories/safe" className="linkCompany">
          <img src="./categories/safe.png" alt="Image 3" /></Link>
        </div>
        <div className='carouselImgDiv'>
        <Link to="./categories/walk" className="linkCompany">
          <img src="./categories/walk.png" alt="Image 1" /></Link>
        </div>
      </Slider>
    </div>
  );
}

export default CategoriesCarousel;
