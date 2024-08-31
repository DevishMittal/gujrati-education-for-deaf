import React from "react";
import { Carousel } from "react-bootstrap"; // Import Carousel from react-bootstrap
import a from "../../assets/images/subtract/five.jpg";
import b from "../../assets/images/subtract/five2.jpg";
import c from "../../assets/images/subtract/four.jpg";
import d from "../../assets/images/subtract/thre.jpg";
import e from "../../assets/images/subtract/three.jpg";
import Back from "../common/back/Back";


const images = [
  { src: a, alt: "a", text: "a" },
  { src: b, alt: "b", text: "b" },
  { src: c, alt: "da", text: "Da" },
  { src: d, alt: "da", text: "Da" },
  { src: e, alt: "cha", text: "Cha" },

];

const Subtraction = () => {
  return (
    <>
    <Back/> 
    <div className="container my-4">
      <h1 className="text-center mb-4">Subtraction</h1>
      <Carousel interval={null}> 
        {images.map((img, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100"
              src={img.src}
              alt={img.alt}
              style={{ height: "300px", objectFit: "contain" }}
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
    </>
  );
};

export default Subtraction;
