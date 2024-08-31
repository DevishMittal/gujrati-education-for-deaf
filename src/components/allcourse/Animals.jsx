import React from "react";
import { Carousel } from "react-bootstrap"; // Import Carousel from react-bootstrap
import a from "../../assets/images/animals/bear.jpg";
import b from "../../assets/images/animals/camel.jpg";
import c from "../../assets/images/animals/cheetah.jpg";
import d from "../../assets/images/animals/cow.jpg";
import e from "../../assets/images/animals/dog.jpg";
import f from "../../assets/images/animals/donkey.jpg";
import g from "../../assets/images/animals/elephant.jpg";
import h from "../../assets/images/animals/fox.jpg";
import i from "../../assets/images/animals/giraffe.jpg";
import j from "../../assets/images/animals/goat.jpg";
import k from "../../assets/images/animals/horse.jpg";
import l from "../../assets/images/animals/pig.jpg";
import m from "../../assets/images/animals/rabit.jpg";
import n from "../../assets/images/animals/reindeer.jpg";
import o from "../../assets/images/animals/squirrel.jpg";
import p from "../../assets/images/animals/zebra.jpg";


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

const Animals = () => {
  return (
    <div className="container my-4">
      <h1 className="text-center mb-4">Animals</h1>
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

export default Animals;
