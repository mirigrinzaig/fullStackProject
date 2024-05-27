import { NavLink } from "react-router-dom"
import "./HomeMain.css"

//  import { Gallery as gridGallery} from "react-grid-gallery";
//  import React from 'react'
// import Carousel from 'better-react-carousel'
// const images = [
//     {
//        url: "https://www.pinterest.com/pin/646407352753960060/",
//        width: 320,
//        height: 174,
//        isSelected: true,
//        caption: "After Rain (Jeshu John - designerspics.com)",
//     },
//     {
//         src: "https://www.pinterest.com/pin/646970302757332736/",
//         width: 320,
//         height: 174,
//         isSelected: true,
//         caption: "After Rain (Jeshu John - designerspics.com)",
//      },
//       {
//         src: "https://www.pinterest.com/pin/985231161201968/",
//         width: 320,
//         height: 174,
//         isSelected: true,
//         caption: "After Rain (Jeshu John - designerspics.com)",
//      },
//     {
//        src: "https://www.pinterest.com/pin/13088655155115452/",
//        width: 320,
//        height: 212,
//        tags: [
//           { value: "Ocean", title: "Ocean" },
//           { value: "People", title: "People" },
//        ],
//        alt: "Boats (Jeshu John - designerspics.com)",
//     },
//     {
//        src: "https://www.pinterest.com/pin/26036504090595608/",
//        width: 320,
//        height: 212,
//     },
//  ];



// const gallery = () => {
//   return (
//     <Carousel cols={2} rows={1} gap={10} loop>
//       <Carousel.Item>
//         <img width="100%" src="https://picsum.photos/800/600?random=1" />
//       </Carousel.Item>
//       <Carousel.Item>
//         <img width="100%" src="https://picsum.photos/800/600?random=2" />
//       </Carousel.Item>
//       <Carousel.Item>
//         <img width="100%" src="https://picsum.photos/800/600?random=3" />
//       </Carousel.Item>
//       <Carousel.Item>
//         {/* anything you want to show in the grid */}
//       </Carousel.Item>
//       {/* ... */}
//     </Carousel>
//   )
// }

// const HomeMain =()=>{
//     return<>
//      <gridGallery images={images}/>


import React from 'react'
import Slider from 'react-touch-drag-slider'
import { Carousel } from 'react-responsive-carousel';
import ScrollCarousel from 'scroll-carousel-react';
import CategoriesCarousel from "./CategoriesCarousel"



const HomeMain = () => {
  


   return (
      <>
       <CategoriesCarousel />
      </>


   );
};

export default HomeMain;