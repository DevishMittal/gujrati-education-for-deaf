import React from "react";
import { useNavigate } from "react-router-dom";
import "./courses.css";
import { coursesCard } from "../../dummydata";

const CoursesCard = () => {
  const navigate = useNavigate(); 
  return (
    <>
      <section className="coursesCard">
        <div className="container">
          {coursesCard.map((val, index) => (
            <div className="items" key={val.id || index} style={{ backgroundColor: val.cardBgColor }}>
              <button
                className="outline-btn"
                style={{ backgroundColor: val.buttonColor }}
                onClick={() => navigate(`/learn/${val.id || index}`)}
              >
                {val.buttonText}
              </button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default CoursesCard;
