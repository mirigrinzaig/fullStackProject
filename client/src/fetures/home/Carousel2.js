import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import AllLinks from "./allLinks";

const RecipeGallery = () => {
  const [images] = useState([
    require("../images/image1.jpg"),
    require("../images/image2.jpg"),
    require("../images/image3.jpg"),
    require("../images/image4.jpg"),
    require("../images/image5.jpg"),
    require("../images/image6.jpg"),
    require("../images/image7.jpg"),
    require("../images/image8.jpg"),
    require("../images/image10.jpg"),
    require("../images/image11.jpg"),
    require("../images/image12.jpg"),
    require("../images/image13.jpg"),
    require("../images/image14.jpg"),
    require("../images/image15.jpg")
  ]);

  return (
    <>
    <AllLinks/>
    <div>
      <h2 style={{ textAlign: "center",color:"wheat"}}>Recipe Gallery</h2>
      <Carousel style={{ width: "80%", margin: "0 auto" }}>
        {images.map((image, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100"
              src={image}
              alt={`Recipe Image ${index + 1}`}
              style={{ height: "300px", objectFit: "cover" }}
            />
            <Carousel.Caption>
              <h3 style={{ color: "#fff" }}>Recipe {index + 1}</h3>
              <p style={{ color: "#fff" }}>Description of recipe {index + 1}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
    </>
  );
};

export default RecipeGallery;
