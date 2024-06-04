// import "./plumaAbout.css"

// const Posts = () => {


//     return <div className="about">
//         <h3 className="postsTitle">פוסטים : </h3>
//         <div className="textAbout">

//             פברואר 29, 2024
//             מה ההבדל בין דגמי עגלות ספורט ליין?
//             פברואר 3, 2024
//             מנשא מומלץ לתינוק – איך בוחרים מנשא לתינוק?
//             ינואר 30, 2024
//             מה ההבדל בין סלקל לכסא/מושב בטיחות?
//             ינואר 26, 2024
//             איך לבחור עריסת תינוק?
//             ינואר 26, 2024
//             איך לבחור עגלת תינוק





//         </div>
//         <div className="footer-logo"><img src="/logo.png" className="logoP" /></div>
//     </div>

// }
// export default Posts

import React from "react";
import "./posts.css";

const posts = [
    {
        id: 1,
        date:"פברואר 29 , 2024",
        image: "./categoriesImg/room.png",
        title: "מה ההבדל בין דגמי עגלות ספורט ליין?",
        excerpt: "לדגמי עגלות ספורט ליין יש מגוון רחב של תכונות, החל ממתלים מתקדמים ועד מערכות קיפול קומפקטיות. במאמר זה נסקור את ההבדלים העיקריים בין הדגמים השונים ונעזור לכם לבחור את העגלה המתאימה ביותר לצרכים שלכם.",
        url: "https://valcobaby.com/blog/",
    },
    {
        id: 2,
        date:"פברואר 29 , 2024",
        image: "./imgs/plumaStore.jpg",
        title: "מנשא מומלץ לתינוק – איך בוחרים מנשא לתינוק?",
        excerpt: "בחירת המנשא המתאים לתינוק היא משימה חשובה. במאמר זה נסביר לכם את סוגי המנשאים השונים, את היתרונות והחסרונות של כל סוג, ונעזור לכם לבחור את המנשא המתאים ביותר עבורכם ועבור תינוקכם.",
        url: "https://babytula.com/blogs/babywearing",
    },
    {
        id: 3,
        date:"פברואר 29 , 2024",
        image:  "./categoriesImg/safe2.jpg",
        title: "מה ההבדל בין סלקל לכסא/מושב בטיחות?",
        excerpt: "סלקל ומושב בטיחות הם שני סוגים של מושבי רכב לתינוקות, אך יש ביניהם הבדלים חשובים. במאמר זה נסביר לכם את ההבדלים העיקריים בין שני סוגי המושבים ונעזור לכם לבחור את המושב המתאים ביותר עבור תינוקכם.",
        url: "https://carseatblog.com/",
    },
    {
        id: 4,
        date:"פברואר 29 , 2024",
        image: "./categoriesImg/room2.jpeg",
        title: "איך לבחור עריסת תינוק?",
        excerpt: "עריסת תינוק היא מקום בטוח ונוח לתינוק לישון. במאמר זה נסביר לכם את סוגי העריסות השונים, את היתרונות והחסרונות של כל סוג, ונעזור לכם לבחור את העריסה המתאימה ביותר עבור תינוקכם.",
        url: "https://cradlewise.com/blog",
    },
    {
        id: 5,
        date:"פברואר 29 , 2024",
        image: "./imgs/stroller.png",
        title: "איך לבחור עגלת תינוק?",
        excerpt: "בחירת עגלת תינוק היא משימה חשובה. במאמר זה נסביר לכם את סוגי העגלות השונים, את היתרונות והחסרונות של כל סוג, ונעזור לכם לבחור את העגלה המתאימה ביותר עבורכם ועבור תינוקכם.",
        url: "https://valcobaby.com/blog/",
    },
];


const Posts = () => {
    return (
        <div className="posts-container">
            <div className="post-header">
                <h3 className="postsTitle">פוסטים אחרונים : </h3>
            </div>
            <div className="posts-list">
                {posts.map((post) => (
                    <div className="post" key={post.id}>
                        <div className="post-image">
                            <img src={post.image} alt={post.title} />
                        </div>
                        <div className="post-content">
                            <p className="post-date">{post.date}</p>
                            <h3 className="post-title">{post.title}</h3>
                            {/* <p className="post-excerpt">{post.excerpt}</p> */}
                            <a href={post.url} className="post-read-more">קרא עוד &#62;&gt;
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Posts;
