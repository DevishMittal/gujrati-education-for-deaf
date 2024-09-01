import React from "react";
import { Carousel } from "react-bootstrap"; // Import Carousel from react-bootstrap
import a from "../../assets/images/add/eight.jpg";
import b from "../../assets/images/add/five.jpg";
import c from "../../assets/images/add/nin.jpg";
import d from "../../assets/images/add/nine.jpg";
import e from "../../assets/images/add/seven.jpg";
import Back from "../common/back/Back";


const images = [
  { src: a, alt: "a", text: "a" },
  { src: b, alt: "b", text: "b" },
  { src: c, alt: "da", text: "Da" },
  { src: d, alt: "da", text: "Da" },
  { src: e, alt: "cha", text: "Cha" },

];

const Addition = () => {
  return (
    <>
    <Back/> 
    <div className="container my-4">
      <h1 className="text-center mb-4">Addition</h1>
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

export default Addition;
