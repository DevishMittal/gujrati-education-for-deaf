import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Back from "../common/back/Back";
import './Levels.css'; // Import the custom CSS file

const levels = ["Easy", "Medium", "Hard"];

const Levels = () => {
  const navigate = useNavigate();
  const { category } = useParams();

  return (
    <>
      <Back />
      <div className="levels">
        <h2 className="levels__title">Select Difficulty Level</h2>
        <div className="levels__grid">
          {levels.map((level, index) => (
            <div 
              key={index} 
              className="levels__card" 
              onClick={() => navigate(`/quiz/${category}/${level.toLowerCase()}`)}
            >
              <h5 className="levels__card-title">{level}</h5>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Levels;
