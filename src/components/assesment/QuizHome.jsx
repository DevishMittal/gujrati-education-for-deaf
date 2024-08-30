import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

// Example images, replace these with the actual paths to your icons
import mathIcon from "../../assets/icons/maths.png";
import scienceIcon from "../../assets/icons/science.png";
import englishIcon from "../../assets/icons/english.png";
import gujaratiIcon from "../../assets/icons/gujarati.png";

const categories = [
  { name: "Mathematics", icon: mathIcon, questions: 95, path: "/levels/maths" },
  { name: "Science", icon: scienceIcon, questions: 30, path: "/levels/science" },
  { name: "English", icon: englishIcon, questions: 50, path: "/levels/english" },
  { name: "Gujarati", icon: gujaratiIcon, questions: 20, path: "/levels/gujarati" },
];

const QuizSection = () => {
  const navigate = useNavigate();

  return (
    <div className="container my-4">
      <h2 className="text-center mb-4">Let's Play</h2>
      <div className="row">
        {categories.map((category, index) => (
          <div 
            key={index} 
            className="col-12 col-md-6 col-lg-4 mb-4" 
            onClick={() => navigate(category.path)}
            style={{ cursor: 'pointer' }}
          >
            <div className="card text-center shadow-sm">
              <div className="card-body">
                <img 
                  src={category.icon} 
                  alt={category.name} 
                  className="card-img-top mx-auto mb-3" 
                  style={{ width: '80px', height: '80px' }} 
                />
                <h5 className="card-title">{category.name}</h5>
                <p className="card-text">{category.questions} questions</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuizSection;
