import React from "react";
import { useNavigate } from "react-router-dom";
import "./courses.css";
import { coursesCard } from "../../dummydata";

const CoursesCard = () => {
  const navigate = useNavigate();
  return (
    <>
      <section className="courses">
        <div className="courses__container">
          {coursesCard.map((val, index) => (
            <div 
              className="courses__item" 
              key={val.id || index} 
              style={{ backgroundColor: val.cardBgColor }}
            >
              <button
                className="courses__button"
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
