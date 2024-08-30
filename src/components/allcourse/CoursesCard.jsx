import React from "react";
import { useNavigate } from "react-router-dom";
import "./courses.css";
import { coursesCard } from "../../dummydata";

const CoursesCard = () => {
  const navigate = useNavigate(); 
  return (
    <>
      <section className="coursesCard">
        <div className="container grid2">
          {coursesCard.map((val, index) => (
            <div className="items" key={val.id || index}>
              <div className="content flex">
                <div className="left">
                  <div className="img">
                    <img src={val.cover} alt="" />
                  </div>
                </div>
                <div className="text">
                  <h1>{val.coursesName}</h1>
                  <div className="details">
                    {val.courTeacher.map((details, index) => (
                      <div key={index}>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <button className="outline-btn" onClick={() => navigate(`/learn/${val.id || index}`)}>Start Learning</button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default CoursesCard;
