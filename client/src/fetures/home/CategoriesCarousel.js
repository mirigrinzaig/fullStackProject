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
  slidesToShow:4,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />

};

const CategoriesCarousel = () => {
  return (
    <div className="carouselWrapper Categories">
      <Slider className='carousel' {...settings}>
        <div className='CarouselCategoriesItem'>
          <Link to="./categories/accessories" className="linkCategory">
            <div className='linkCategoryDiv'>
              <img src="./categoriesImg/accessories2.png" alt="Image 1" />
              <p className='linkCategoryDeatails'>אקקסוריז ואביזרים</p>
            </div></Link>
        </div>
        <div className='CarouselCategoriesItem'>
          <Link to="./categories/bath" className="linkCategory">
            <div className='linkCategoryDiv'>
              <img src="./categoriesImg/bath.webp" alt="Image 1" />
              <p className='linkCategoryDeatails'>רחצה</p>
            </div></Link>
        </div>
        <div className='CarouselCategoriesItem'>
          <Link to="./categories/plumabrand" className="linkCategory">
            <div className='linkCategoryDiv'>
              <img src="./categoriesImg/play.webp" alt="Image 1" />
              <p className='linkCategoryDeatails'>המותג שלנו</p>
            </div></Link>
        </div>
        <div className='CarouselCategoriesItem'>
          <Link to="./categories/clothing" className="linkCategory">
            <div className='linkCategoryDiv'>
              <img src="./categoriesImg/clothing2.webp" alt="Image 1" />
              <p className='linkCategoryDeatails'>ביגוד והלבשה</p>
            </div></Link>
        </div>
        <div className='CarouselCategoriesItem'>
          <Link to="./categories/feed" className="linkCategory">
            <div className='linkCategoryDiv'>
              <img src="./categoriesImg/feed.webp" alt="Image 1" />
              <p className='linkCategoryDeatails'>האכלה ומוצצים</p>
            </div></Link>
        </div>
        <div className='CarouselCategoriesItem'>
          <Link to="./categories/hygine" className="linkCategory">
            <div className='linkCategoryDiv'>
              <img src="./categoriesImg/hygine.png" alt="Image 1" />
              <p className='linkCategoryDeatails'>היגיינה וטיפוח</p>
            </div></Link>
        </div>
        <div className='CarouselCategoriesItem'>
          <Link to="./categories/play" className="linkCategory">
            <div className='linkCategoryDiv'>
              <img src="./categoriesImg/accessories.webp" alt="Image 1" />
              <p className='linkCategoryDeatails'>צעצועים ומשחק</p>
            </div></Link>
        </div>
        <div className='CarouselCategoriesItem'>
          <Link to="./categories/presents" className="linkCategory">
            <div className='linkCategoryDiv'>
              <img src="./categoriesImg/presents.webp" alt="Image 1" />
              <p className='linkCategoryDeatails'>מתנות ופינוקים</p>
            </div></Link>
        </div>
        <div className='CarouselCategoriesItem'>
          <Link to="./categories/safe" className="linkCategory">
            <div className='linkCategoryDiv'>
              <img src="./categoriesImg/safe2.jpg" alt="Image 1" />
              <p className='linkCategoryDeatails'>בטיחות</p>
            </div></Link>
        </div>
        <div className='CarouselCategoriesItem'>
          <Link to="./categories/walk" className="linkCategory">
            <div className='linkCategoryDiv'>
              <img src="./categoriesImg/walk.webp" alt="Image 1" />
              <p className='linkCategoryDeatails'>טיול ועגלות</p>
            </div></Link>
        </div>
      </Slider>
    </div>
  );
}

export default CategoriesCarousel;
