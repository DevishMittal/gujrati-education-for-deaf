import React from "react";
import { Carousel } from "react-bootstrap"; // Import Carousel from react-bootstrap
import a from "../../assets/images/fruits/apple.jpg";
import b from "../../assets/images/fruits/avocado.jpg";
import c from "../../assets/images/fruits/banana.jpg";
import d from "../../assets/images/fruits/cherry.jpg";
import e from "../../assets/images/fruits/dragon.jpg";
import f from "../../assets/images/fruits/grape.jpg";
import g from "../../assets/images/fruits/kiwi.jpg";
import h from "../../assets/images/fruits/lemon.jpg";
import i from "../../assets/images/fruits/mango.jpg";
import j from "../../assets/images/fruits/mangostee.jpg";
import k from "../../assets/images/fruits/orange.jpg";
import l from "../../assets/images/fruits/papaya.jpg";
import m from "../../assets/images/fruits/pine.jpg";
import n from "../../assets/images/fruits/pomo.jpg";
import o from "../../assets/images/fruits/straw.jpg";
import p from "../../assets/images/fruits/water.jpg";
import Back from "../common/back/Back";

const images = [
  { src: a, alt: "a", text: "a" },
  { src: b, alt: "b", text: "b" },
  { src: c, alt: "da", text: "Da" },
  { src: d, alt: "da", text: "Da" },
  { src: e, alt: "cha", text: "Cha" },
  { src: f, alt: "chha", text: "Chha" },
  { src: g, alt: "da", text: "Da" },
  { src: h, alt: "da", text: "Da" },
  { src: i, alt: "da", text: "Da" },
  { src: j, alt: "da", text: "Da" },
  { src: k, alt: "da", text: "Da" },
  { src: l, alt: "da", text: "Da" },
  { src: m, alt: "da", text: "Da" },
  { src: n, alt: "da", text: "Da" },
  { src: o, alt: "da", text: "Da" },
  { src: p, alt: "da", text: "Da" },
];

const Fruits = () => {
  return (
    <>
     <Back />
    <div className="container my-4">
      <h1 className="text-center mb-4">fruits</h1>
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

export default Fruits;
