import React from "react";
import { Carousel } from "react-bootstrap"; // Import Carousel from react-bootstrap
import a from "../../assets/images/EngAlpha/a.jpg";
import b from "../../assets/images/EngAlpha/b.jpg";
import c from "../../assets/images/EngAlpha/c.jpg";
import d from "../../assets/images/EngAlpha/d.jpg";
import e from "../../assets/images/EngAlpha/e.jpg";
import f from "../../assets/images/EngAlpha/f.jpg";
import g from "../../assets/images/EngAlpha/g.jpg";
import h from "../../assets/images/EngAlpha/h.jpg";
import i from "../../assets/images/EngAlpha/i.jpg";
import j from "../../assets/images/EngAlpha/j.jpg";
import k from "../../assets/images/EngAlpha/k.jpg";
import l from "../../assets/images/EngAlpha/l.jpg";
import m from "../../assets/images/EngAlpha/m.jpg";
import n from "../../assets/images/EngAlpha/n.jpg";
import o from "../../assets/images/EngAlpha/o.jpg";
import p from "../../assets/images/EngAlpha/p.jpg";
import q from "../../assets/images/EngAlpha/q.jpg";
import r from "../../assets/images/EngAlpha/r.jpg";
import s from "../../assets/images/EngAlpha/s.jpg";
import t from "../../assets/images/EngAlpha/t.jpg";
import u from "../../assets/images/EngAlpha/u.jpg";
import v from "../../assets/images/EngAlpha/v.jpg";
import w from "../../assets/images/EngAlpha/w.jpg";
import x from "../../assets/images/EngAlpha/x.jpg";
import y from "../../assets/images/EngAlpha/y.jpg";
import z from "../../assets/images/EngAlpha/z.jpg";
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
  { src: q, alt: "da", text: "Da" },
  { src: r, alt: "da", text: "Da" },
  { src: s, alt: "da", text: "Da" },
  { src: t, alt: "da", text: "Da" },
  { src: u, alt: "ba", text: "Ba" },
  { src: v, alt: "ba", text: "Ba" },
  { src: w, alt: "da", text: "Da" },
  { src: x, alt: "da", text: "Da" },
  { src: y, alt: "da", text: "Da" },
  { src: z, alt: "da", text: "Da" },
];

const EnglishAlpha = () => {
  return (
    <>
     <Back />
    <div className="container my-4">
      <h1 className="text-center mb-4">Learn Alphabets</h1>
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

export default EnglishAlpha;
