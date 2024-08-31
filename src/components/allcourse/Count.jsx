import React from "react";
import { Carousel } from "react-bootstrap"; // Import Carousel from react-bootstrap
import a from "../../assets/images/counting/one.jpg";
import b from "../../assets/images/counting/two.jpg";
import c from "../../assets/images/counting/three.jpg";
import d from "../../assets/images/counting/four.jpg";
import e from "../../assets/images/counting/five.jpg";
import f from "../../assets/images/counting/six.jpg";
import g from "../../assets/images/counting/seven.jpg";
import h from "../../assets/images/counting/eight.jpg";
import i from "../../assets/images/counting/nine.jpg";
import j from "../../assets/images/counting/zero.jpg";
import Back from "../common/back/Back";


const images = [
    { src: j, alt: "da", text: "Da" },
  { src: a, alt: "a", text: "a" },
  { src: b, alt: "b", text: "b" },
  { src: c, alt: "da", text: "Da" },
  { src: d, alt: "da", text: "Da" },
  { src: e, alt: "cha", text: "Cha" },
  { src: f, alt: "chha", text: "Chha" },
  { src: g, alt: "da", text: "Da" },
  { src: h, alt: "da", text: "Da" },
  { src: i, alt: "da", text: "Da" },
];

const Count = () => {
  return (
    <>
    <Back/> 
    <div className="container my-4">
      <h1 className="text-center mb-4">counting</h1>
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

export default Count;
