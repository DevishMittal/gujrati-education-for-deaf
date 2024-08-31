import React from "react";
import { Carousel } from "react-bootstrap"; // Import Carousel from react-bootstrap
import a from "../../assets/images/vegetables/beet.jpg";
import b from "../../assets/images/vegetables/bitt.jpg";
import c from "../../assets/images/vegetables/brin.jpg";
import d from "../../assets/images/vegetables/broc.jpg";
import e from "../../assets/images/vegetables/cab.jpg";
import f from "../../assets/images/vegetables/capsi.jpg";
import g from "../../assets/images/vegetables/carr.jpg";
import h from "../../assets/images/vegetables/cauli.jpg";
import i from "../../assets/images/vegetables/corn.jpg";
import j from "../../assets/images/vegetables/garlic.jpg";
import k from "../../assets/images/vegetables/mush.jpg";
import l from "../../assets/images/vegetables/oni.jpg";
import m from "../../assets/images/vegetables/pea.jpg";
import n from "../../assets/images/vegetables/po.jpg";
import o from "../../assets/images/vegetables/pump.jpg";
import p from "../../assets/images/vegetables/toma.jpg";


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

const Vegetables = () => {
  return (
    <div className="container my-4">
      <h1 className="text-center mb-4">vegetables</h1>
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
  );
};

export default Vegetables;
