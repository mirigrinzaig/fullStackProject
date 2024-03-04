import { NavLink } from "react-router-dom"
import "./HomeMain.css"

// import { Gallery } from "react-grid-gallery";
// const images = [
//     {
//        src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
//        width: 320,
//        height: 174,
//        isSelected: true,
//        caption: "After Rain (Jeshu John - designerspics.com)",
//     },
//     {
//         src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
//         width: 320,
//         height: 174,
//         isSelected: true,
//         caption: "After Rain (Jeshu John - designerspics.com)",
//      },
//       {
//         src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
//         width: 320,
//         height: 174,
//         isSelected: true,
//         caption: "After Rain (Jeshu John - designerspics.com)",
//      },
//     {
//        src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
//        width: 320,
//        height: 212,
//        tags: [
//           { value: "Ocean", title: "Ocean" },
//           { value: "People", title: "People" },
//        ],
//        alt: "Boats (Jeshu John - designerspics.com)",
//     },
//     {
//        src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
//        width: 320,
//        height: 212,
//     },
//  ];
 
import React from 'react'
//import Carousel from 'better-react-carousel'

// const Gallery = () => {
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

const HomeMain =()=>{
    return<>
     {/* <Gallery images={images}/> */}

     {/* responsiveLayout=[
  {
    breakpoint: 800,
    cols: 3,
    rows: 1,
    gap: 10,
    loop: true,
    autoplay: 1000
  }
] */}
     {/* <Carousel className="DivHomeOpenImage"  cols={1} rows={1} gap={10} hideArrow={true} autoplay={1000} loop={true}>
      <Carousel.Item>
      <NavLink to='/categories/plumabrand'><img className="HomeOpenImage" src="/Home1.jpg"/></NavLink>
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src="/logo.png" />
      </Carousel.Item>
      <Carousel.Item>
      <NavLink to='/categories/plumabrand'><img className="HomeOpenImage" src="/Home1.jpg"/></NavLink>
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src="/Home1.jpg" />
      </Carousel.Item>
    </Carousel> */}
   
   {/* <Carousel cols={6} rows={1} gap={10} loop>
    <Carousel.Item>
    <NavLink to='/categories/clothing'><img className="categoryIcon" src="/logo.png"/>הלבשה</NavLink>
    </Carousel.Item>
    <Carousel.Item>
    <NavLink to='/categories/clothing'><img className="categoryIcon" src="/logo.png"/>הלבשה</NavLink>
    </Carousel.Item><Carousel.Item>
    <NavLink to='/categories/clothing'><img className="categoryIcon" src="/logo.png"/>הלבשה</NavLink>
    </Carousel.Item><Carousel.Item>
    <NavLink to='/categories/clothing'><img className="categoryIcon" src="/logo.png"/>הלבשה</NavLink>
    </Carousel.Item><Carousel.Item>
    <NavLink to='/categories/clothing'><img className="categoryIcon" src="/logo.png"/>הלבשה</NavLink>
    </Carousel.Item>
   </Carousel> */}
   
    <div className="HomeCategorys">
                <NavLink to='/categories/clothing'><img className="categoryIcon" src={"/logo512.png"}/>הלבשה</NavLink>
                <NavLink to='/categories/accessories'><img className="categoryIcon" src="/logo.png"/>אקססוריז</NavLink>
                <NavLink to='/categories/feed'><img className="categoryIcon" src="/logo.png"/>האכלה</NavLink>
                <NavLink to='/categories/bath'><img className="categoryIcon" src="/logo.png"/>רחצה</NavLink>
                <NavLink to='/categories/sleep'><img className="categoryIcon" src="/logo.png"/>שינה</NavLink>
                <NavLink to='/categories/walk'><img className="categoryIcon" src="/logo.png"/>טיול</NavLink>
                <NavLink to='/categories/play'><img className="categoryIcon" src="/logo.png"/>משחק</NavLink>
                <NavLink to='/categories/safe'><img className="categoryIcon" src="/logo.png"/>בטיחות</NavLink>
                <NavLink to='/categories/hygine'><img className="categoryIcon" src="/logo.png"/>הגיינה וטיפוח</NavLink>
                <NavLink to='/categories/presents'><img className="categoryIcon" src="/logo.png"/>פינוק ומתנות</NavLink>
               

        </div>
        <div>

            </div></>
    }
    export default HomeMain