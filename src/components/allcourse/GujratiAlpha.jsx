import React from "react";
import { Carousel } from "react-bootstrap"; // Import Carousel from react-bootstrap
import ka from "../../assets/images/GujuAlpha/ka.jpg";
import ba from "../../assets/images/GujuAlpha/ba.jpg";
import bha from "../../assets/images/GujuAlpha/bha.jpg";
import cha from "../../assets/images/GujuAlpha/cha.jpg";
import chha from "../../assets/images/GujuAlpha/chha.jpg";
import da from "../../assets/images/GujuAlpha/da.jpg";
import da2 from "../../assets/images/GujuAlpha/da2.jpg";
import dha from "../../assets/images/GujuAlpha/dha.jpg";
import dha2 from "../../assets/images/GujuAlpha/dha2.jpg";
import ga from "../../assets/images/GujuAlpha/ga.jpg";
import gha from "../../assets/images/GujuAlpha/gha.jpg";
import gya from "../../assets/images/GujuAlpha/gya.jpg";
import saaa from "../../assets/images/GujuAlpha/saaa.jpg";
import ja from "../../assets/images/GujuAlpha/ja.jpg";
import jha from "../../assets/images/GujuAlpha/jha.jpg";
import kha from "../../assets/images/GujuAlpha/kha.jpg";
import ksha from "../../assets/images/GujuAlpha/ksha.jpg";
import la from "../../assets/images/GujuAlpha/la.jpg";
import ma from "../../assets/images/GujuAlpha/ma.jpg";
import na from "../../assets/images/GujuAlpha/na.jpg";
import na2 from "../../assets/images/GujuAlpha/na2.jpg";
import pa from "../../assets/images/GujuAlpha/pa.jpg";
import pha from "../../assets/images/GujuAlpha/pha.jpg";
import ra from "../../assets/images/GujuAlpha/ra.jpg";
import sa from "../../assets/images/GujuAlpha/sa.jpg";
import haa from "../../assets/images/GujuAlpha/haa.jpg";
import sha2 from "../../assets/images/GujuAlpha/sha2.jpg";
import ta from "../../assets/images/GujuAlpha/ta.jpg";
import ta2 from "../../assets/images/GujuAlpha/ta2.jpg";
import tha from "../../assets/images/GujuAlpha/tha.jpg";
import tha2 from "../../assets/images/GujuAlpha/tha2.jpg";
import va from "../../assets/images/GujuAlpha/va.jpg";
import ya from "../../assets/images/GujuAlpha/ya.jpg";
import Back from "../common/back/Back";
const images = [
  { src: ka, alt: "ka", text: "Ka" },
  { src: kha, alt: "da", text: "Da" },
  { src: ga, alt: "da", text: "Da" },
  { src: gha, alt: "da", text: "Da" },
  { src: cha, alt: "cha", text: "Cha" },
  { src: chha, alt: "chha", text: "Chha" },
  { src: ja, alt: "da", text: "Da" },
  { src: jha, alt: "da", text: "Da" },
  { src: ta2, alt: "da", text: "Da" },
  { src: tha, alt: "da", text: "Da" },
  { src: da2, alt: "da", text: "Da" },
  { src: dha2, alt: "da", text: "Da" },
  { src: na2, alt: "da", text: "Da" },
  { src: ta, alt: "da", text: "Da" },
  { src: tha, alt: "da", text: "Da" },
  { src: da, alt: "da", text: "Da" },
  { src: dha, alt: "da", text: "Da" },
  { src: na, alt: "da", text: "Da" },
  { src: pa, alt: "da", text: "Da" },
  { src: pha, alt: "da", text: "Da" },
  { src: ba, alt: "ba", text: "Ba" },
  { src: bha, alt: "ba", text: "Ba" },
  { src: ma, alt: "da", text: "Da" },
  { src: ya, alt: "da", text: "Da" },
  { src: ra, alt: "da", text: "Da" },
  { src: la, alt: "da", text: "Da" },
  { src: va, alt: "da", text: "Da" },
  { src: sha2, alt: "da", text: "Da" },
  { src: sa, alt: "da", text: "Da" },
  { src: saaa, alt: "da", text: "Da" },
  { src: haa, alt: "da", text: "Da" },
  { src: la, alt: "da", text: "Da" },
  { src: ksha, alt: "da", text: "Da" },
  { src: gya, alt: "da", text: "Da" },
];

const GujratiAlpha = () => {
  return (
    <>
    <Back/> 
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

export default GujratiAlpha;
