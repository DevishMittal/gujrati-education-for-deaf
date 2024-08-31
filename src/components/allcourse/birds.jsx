import React from "react";
import { Carousel } from "react-bootstrap"; // Import Carousel from react-bootstrap
import a from "../../assets/images/birds/crane.jpg";
import b from "../../assets/images/birds/crow.jpg";
import c from "../../assets/images/birds/duck.jpg";
import d from "../../assets/images/birds/eag.jpg";
import e from "../../assets/images/birds/flam.jpg";
import f from "../../assets/images/birds/goo.jpg";
import g from "../../assets/images/birds/maca.jpg";
import h from "../../assets/images/birds/ost.jpg";
import i from "../../assets/images/birds/owl.jpg";
import j from "../../assets/images/birds/pea.jpg";
import k from "../../assets/images/birds/pig.jpg";
import l from "../../assets/images/birds/roos.jpg";
import m from "../../assets/images/birds/touc.jpg";
import n from "../../assets/images/birds/vul.jpg";
import o from "../../assets/images/birds/wood.jpg";



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
];

const Birds = () => {
  return (
    <div className="container my-4">
      <h1 className="text-center mb-4">birds</h1>
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

export default Birds;
