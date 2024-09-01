import React from "react";
import { useNavigate } from "react-router-dom";
import './quizStyles.css';
import Back from "../common/back/Back";

// Example images, replace these with the actual paths to your icons
import mathIcon from "../../assets/icons/maths.png";
import scienceIcon from "../../assets/icons/science.png";
import englishIcon from "../../assets/icons/english.png";
import gujaratiIcon from "../../assets/icons/gujarati.png";

const categories = [
  { name: "Mathematics", icon: mathIcon, path: "/levels/maths" },
  { name: "Science", icon: scienceIcon, path: "/levels/science" },
  { name: "English", icon: englishIcon, path: "/levels/english" },
  { name: "Gujarati", icon: gujaratiIcon, path: "/levels/gujarati" },
];

const QuizSection = () => {
  const navigate = useNavigate();

  return (
    <>
      <Back title="Assessment" />
      <div className="quiz-container">
        <h2 className="quiz-title">Let's Play</h2>
        <div className="quiz-grid">
          {categories.map((category, index) => (
            <div 
              key={index} 
              className="quiz-card" 
              onClick={() => navigate(category.path)}
            >
              <div className="card-content">
                <img 
                  src={category.icon} 
                  alt={category.name} 
                  className="card-img" 
                />
                <h5 className="card-title">{category.name}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default QuizSection;
