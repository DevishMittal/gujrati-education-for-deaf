import React from "react";
import Heading from "../../common/heading/Heading";
import "./Hero.css";

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="row">
            <Heading
              subtitle="WELCOME TO SilentEcho"
            />
            <p>
            Our educational app is designed to support individuals who are deaf or hard of hearing and those who are non-verbal, offering accessible and engaging learning resources tailored to their needs.
            </p>
          </div>
        </div>
      </section>
      <div className="margin"></div>
    </>
  );
};

export default Hero;
