import React from "react";
import "./about.css";
import { homeAbout } from "../../dummydata";
import { Link } from "react-router-dom";

const AboutCard = () => {
  return (
    <>
      <section className="aboutHome">
            <div className="items">
              {homeAbout.map((val, index) => {
                // Define unique links for each section
                const links = ["/courses", "/assessment", "/contact"];
                const link = links[index % links.length];

                return (
                  <div key={index} className="item flexSB">
                    <div className="img">
                      <img src={val.cover} alt="" />
                    </div>
                    <div className="text">
                      <h2>{val.title}</h2>
                      
                      <Link to={link} className="button">
                        Learn More
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
      </section>
    </>
  );
};

export default AboutCard;
