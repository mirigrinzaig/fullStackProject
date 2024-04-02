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

//      <Carousel className="DivHomeOpenImage"  cols={1} rows={1} gap={10} hideArrow={true} autoplay={1000} loop={true}>
//       <Carousel.Item>
//       <NavLink to='/categories/plumabrand'><img className="HomeOpenImage" src="/Home1.jpg"/></NavLink>
//       </Carousel.Item>
//       <Carousel.Item>
//         <img width="100%" src="/logo.png" />
//       </Carousel.Item>
//       <Carousel.Item>
//       <NavLink to='/categories/plumabrand'><img className="HomeOpenImage" src="/Home1.jpg"/></NavLink>
//       </Carousel.Item>
//       <Carousel.Item>
//         <img width="100%" src="/Home1.jpg" />
//       </Carousel.Item>
//     </Carousel> 

//    { <Carousel cols={6} rows={1} gap={10} loop>
//     <Carousel.Item>
//     <NavLink to='/categories/clothing'><img className="categoryIcon" src="/logo.png"/>הלבשה</NavLink>
//     </Carousel.Item>
//     <Carousel.Item>
//     <NavLink to='/categories/clothing'><img className="categoryIcon" src="/logo.png"/>הלבשה</NavLink>
//     </Carousel.Item><Carousel.Item>
//     <NavLink to='/categories/clothing'><img className="categoryIcon" src="/logo.png"/>הלבשה</NavLink>
//     </Carousel.Item><Carousel.Item>
//     <NavLink to='/categories/clothing'><img className="categoryIcon" src="/logo.png"/>הלבשה</NavLink>
//     </Carousel.Item><Carousel.Item>
//     <NavLink to='/categories/clothing'><img className="categoryIcon" src="/logo.png"/>הלבשה</NavLink>
//     </Carousel.Item>
//    </Carousel> }
//    <img src="https://www.pinterest.com/pin/26036504090595608/"/>

//     <div className="HomeCategorys">
//                 <NavLink to='/categories/clothing'><img className="categoryIcon" src={"/logo512.png"}/>הלבשה</NavLink>
//                 <NavLink to='/categories/accessories'><img className="categoryIcon" src="/logo.png"/>אקססוריז</NavLink>
//                 <NavLink to='/categories/feed'><img className="categoryIcon" src="/logo.png"/>האכלה</NavLink>
//                 <NavLink to='/categories/bath'><img className="categoryIcon" src="/logo.png"/>רחצה</NavLink>
//                 <NavLink to='/categories/sleep'><img className="categoryIcon" src="/logo.png"/>שינה</NavLink>
//                 <NavLink to='/categories/walk'><img className="categoryIcon" src="/logo.png"/>טיול</NavLink>
//                 <NavLink to='/categories/play'><img className="categoryIcon" src="/logo.png"/>משחק</NavLink>
//                 <NavLink to='/categories/safe'><img className="categoryIcon" src="/logo.png"/>בטיחות</NavLink>
//                 <NavLink to='/categories/hygine'><img className="categoryIcon" src="/logo.png"/>הגיינה וטיפוח</NavLink>
//                 <NavLink to='/categories/presents'><img className="categoryIcon" src="/logo.png"/>פינוק ומתנות</NavLink>


//         </div>
//         <div>
//         <img url="https://www.pinterest.com/pin/26036504090595608/"/>
//         <img src="https://www.pinterest.com/pin/328481366589759654/"/>

//             </div></>
//     }
//     export default HomeMain
import React from 'react'
import Slider from 'react-touch-drag-slider'
import { Carousel } from 'react-responsive-carousel';
import ScrollCarousel from 'scroll-carousel-react';


const images = [
   {
      url: "http://localhost:1234/uploads/baby.jpg",
      width: 320,
      height: 174,
      isSelected: true,
      caption: "After Rain (Jeshu John - designerspics.com)",
   },
   {
      url: "http://localhost:1234/uploads/sea.jpg",
      width: 320,
      height: 174,
      isSelected: true,
      caption: "After Rain (Jeshu John - designerspics.com)",
   },
   {
      url: "http://localhost:1234/uploads/baby.jpg",
      width: 320,
      height: 174,
      isSelected: true,
      caption: "After Rain (Jeshu John - designerspics.com)",
   },
   {
      url: "http://localhost:1234/uploads/sea.jpg",
      width: 320,
      height: 212,
      tags: [
         { value: "Ocean", title: "Ocean" },
         { value: "People", title: "People" },
      ],
      alt: "Boats (Jeshu John - designerspics.com)",
   },
   {
      url: "http://localhost:1234/uploads/baby.jpg",
      width: 320,
      height: 212,
   },
];

const HomeMain = () => {
   //  console.log(images[0].url);
   //  images.map((img,index) => {
   //    console.log(`url: ${img.url}, title: ${img.alt}, index=${index}`);
   //  });


   return (
      <>
         <ScrollCarousel
            autoplay={true}
            autoplaySpeed={0}
            speed={0}
            margin={20}
            onReady={() => console.log('I am ready')}
         >
            {images.map((item) => (
               <div key={item} className='bg-blue-300/20 border-2 border-blue-300/70 rounded h-36 w-48'>
                  <img className="carouselImg" src={item.url} alt={item.alt}/>
               </div>
            ))}
         </ScrollCarousel>
         <div className="HomeCategorys">
            <NavLink to='/categories/clothing'><img className="categoryIcon" src={"/categories/clothing.png"} /></NavLink>
            <NavLink to='/categories/accessories'><img className="categoryIcon" src="/categories/accessories.png" /></NavLink>
            <NavLink to='/categories/feed'><img className="categoryIcon" src="/categories/feed.png" /></NavLink>
            <NavLink to='/categories/bath'><img className="categoryIcon" src="/categories/bath.png" /></NavLink>
            <NavLink to='/categories/sleep'><img className="categoryIcon" src="/categories/sleep.png" /></NavLink>
            <NavLink to='/categories/walk'><img className="categoryIcon" src="/categories/walk.png" /></NavLink>
            <NavLink to='/categories/play'><img className="categoryIcon" src="/categories/play.png" /></NavLink>
            <NavLink to='/categories/safe'><img className="categoryIcon" src="/categories/safe.png" /></NavLink>
            <NavLink to='/categories/hygine'><img className="categoryIcon" src="/categories/hygine.png" /></NavLink>
            <NavLink to='/categories/presents'><img className="categoryIcon" src="/categories/presents.png" /></NavLink>


         </div>
         <div>

            <img src="https://cdn.sanity.io/images/kaeaimuz/production/83bd079dada215539a494557f42899724ea4040d-1620x1115.jpg/.undefined?w=1620&h=1115&auto=format" />
         </div>
      </>


   );
};

export default HomeMain;