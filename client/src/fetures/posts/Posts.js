
import "./posts.css";
import { NavLink } from "react-router-dom/dist/umd/react-router-dom.development"
import useAuth from "../../hooks/useAuth"

const posts = [
    {
        id: 1,
        date:"פברואר 29 , 2024",
        image: "./imgs/stroller2.jfif",
        title: "מה ההבדל בין דגמי עגלות ספורט ליין?",
        excerpt: "לדגמי עגלות ספורט ליין יש מגוון רחב של תכונות, החל ממתלים מתקדמים ועד מערכות קיפול קומפקטיות. במאמר זה נסקור את ההבדלים העיקריים בין הדגמים השונים ונעזור לכם לבחור את העגלה המתאימה ביותר לצרכים שלכם.",
        url: "./sportLinePost",
    },
    {
        id: 2,
        date:"פברואר 29 , 2024",
        image: "./imgs/very.webp",
        title: "כיצד מומלץ להלביש את הפעוט בחורף?",
        excerpt: "בחירת המנשא המתאים לתינוק היא משימה חשובה. במאמר זה נסביר לכם את סוגי המנשאים השונים, את היתרונות והחסרונות של כל סוג, ונעזור לכם לבחור את המנשא המתאים ביותר עבורכם ועבור תינוקכם.",
        url: "./winterPost",
    },
    {
        id: 3,
        date:"פברואר 29 , 2024",
        image:  "./imgs/safe2.webp",
        title: "מה ההבדל בין סלקל לכסא/מושב בטיחות?",
        excerpt: "סלקל ומושב בטיחות הם שני סוגים של מושבי רכב לתינוקות, אך יש ביניהם הבדלים חשובים. במאמר זה נסביר לכם את ההבדלים העיקריים בין שני סוגי המושבים ונעזור לכם לבחור את המושב המתאים ביותר עבור תינוקכם.",
        url: "./safePost",
    },
    {
        id: 4,
        date:"פברואר 29 , 2024",
        image: "./categoriesImg/room2.jpeg",
        title: "איך לבחור עריסת תינוק?",
        excerpt: "עריסת תינוק היא מקום בטוח ונוח לתינוק לישון. במאמר זה נסביר לכם את סוגי העריסות השונים, את היתרונות והחסרונות של כל סוג, ונעזור לכם לבחור את העריסה המתאימה ביותר עבור תינוקכם.",
        url: "./badPost",
    },
    {
        id: 5,
        date:"פברואר 29 , 2024",
        image: "./imgs/stroller.png",
        title: "איך לבחור עגלת תינוק?",
        excerpt: "בחירת עגלת תינוק היא משימה חשובה. במאמר זה נסביר לכם את סוגי העגלות השונים, את היתרונות והחסרונות של כל סוג, ונעזור לכם לבחור את העגלה המתאימה ביותר עבורכם ועבור תינוקכם.",
        url: "./carriagePost",
    },
];


const Posts = () => {
    const { _id, userName, name, email,roles } = useAuth()
    return (
        <div className="posts-container">
            <div className="post-header">
                <h3 className="postsTitle">פוסטים אחרונים : </h3>
                {roles==="admin"&&<button className="addPostAdmin">להוספת פוסט</button>}
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
                            {/* <a href={post.url} className="post-read-more">קרא עוד &#62;&gt;
                            </a> */}
                            <NavLink to={post.url} className="post-read-more">קרא עוד &#62;&gt;</NavLink>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Posts;
