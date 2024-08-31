import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="row">
          <div className="hero-text">
            <h3>WELCOME TO LEARNING APP</h3>
            <h1>Best Online Education Expertise</h1>
            <p>
              Where words fall silent, understanding speaks volumes. In the
              world of the deaf and mute, learning isn't just about hearing or
              speaking—it's about seeing, feeling, and knowing that every mind
              has a voice.
            </p>
            <div className="buttons">
              <button className="primary-btn">
                GET STARTED NOW <i className="fa fa-long-arrow-alt-right"></i>
              </button>
              <button className="secondary-btn">
                VIEW COURSE <i className="fa fa-long-arrow-alt-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
