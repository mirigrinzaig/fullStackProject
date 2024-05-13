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

const CompaniesCarousel = () => {
  return (
    <div className="carouselWrapper">
      <Slider className='carousel' {...settings}>
        <div className='carouselImgDiv'>
          <Link to="/?company=avent" className="linkCompany">
            <img src="/companiesLogo/avent.png" /></Link>
        </div>
        <div className='carouselImgDiv'>
          <Link to="/?company=B" className="linkCompany">
            <img src="/companiesLogo/B.png" /></Link>
        </div>
        <div className='carouselImgDiv'>
          <Link to="/?company=baby_einstein" className="linkCompany">
            <img src="/companiesLogo/baby_einstein.png" /></Link>
        </div>
        <div className='carouselImgDiv'>
          <Link to="/?company=babybjorn" className="linkCompany">
            <img src="/companiesLogo/babybjorn.png" /></Link>
        </div>
        <div className='carouselImgDiv'>
          <Link to="/?company=cybex" className="linkCompany">
            <img src="/companiesLogo/cybex.png" /></Link>
        </div>
        <div className='carouselImgDiv'>
          <Link to="/?company=yoyo" className="linkCompany">
            <img src="/companiesLogo/yoyo.png" /></Link>
        </div>
        <div className='carouselImgDiv'>
          <img src="./companiesLogo/disnep.png" alt="Image 3" />
        </div>
        <div className='carouselImgDiv'>
          <Link to="/?company=doona" className="linkCompany">
            <img src="/companiesLogo/doona.png" /></Link>
        </div>
        <div className='carouselImgDiv'>
          <Link to="/?company=easy_walker" className="linkCompany">
            <img src="/companiesLogo/easy_walker.png" /></Link>
        </div>
        <div className='carouselImgDiv'>
          <Link to="/?company=inglesina" className="linkCompany">
            <img src="/companiesLogo/inglesina.png" /></Link>
        </div>
        <div className='carouselImgDiv'>
          <Link to="/?company=pluma" className="linkCompany">
            <img src="/companiesLogo/logo.png" /></Link>
        </div>
        <div className='carouselImgDiv'>
          <Link to="/?company=mam" className="linkCompany">
            <img src="/companiesLogo/mam.png" /></Link>
        </div>
        <div className='carouselImgDiv'>
          <Link to="/?company=maxi_cosi" className="linkCompany">
            <img src="/companiesLogo/maxi_cosi.png" /></Link>
        </div>
        <div className='carouselImgDiv'>
          <Link to="/?company=melissa_doug" className="linkCompany">
            <img src="/companiesLogo/melissa_doug.png" /></Link>
        </div>
        <div className='carouselImgDiv'>
          <Link to="/?company=shilav" className="linkCompany">
            <img src="/companiesLogo/shilav.png" /></Link>
        </div>
        <div className='carouselImgDiv'>
          <Link to="/?company=simply_good" className="linkCompany">
            <img src="/companiesLogo/simply_good.png" /></Link>
        </div>
        <div className='carouselImgDiv'>
          <Link to="/?company=suavinex" className="linkCompany">
            <img src="/companiesLogo/suavinex.png" /></Link>
        </div>
        <div className='carouselImgDiv'>
          <Link to="/?company=tiny_love" className="linkCompany">
            <img src="/companiesLogo/tiny_love.png" /></Link>
        </div>
        <div className='carouselImgDiv'>
          <Link to="/?company=uppa_baby" className="linkCompany">
            <img src="/companiesLogo/uppa_baby.png" /></Link>
        </div>
      </Slider>
    </div>
  );
}

export default CompaniesCarousel;
