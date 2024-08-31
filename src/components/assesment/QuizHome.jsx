import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css'
import Back from "../common/back/Back";
// Example images, replace these with the actual paths to your icons
import mathIcon from "../../assets/icons/maths.png";
import scienceIcon from "../../assets/icons/science.png";
import englishIcon from "../../assets/icons/english.png";
import gujaratiIcon from "../../assets/icons/gujarati.png";

const categories = [
  { name: "Mathematics", icon: mathIcon, path: "/levels/maths" },
  { name: "Science", icon: scienceIcon, path: "/levels/science" },
  { name: "English", icon: englishIcon,  path: "/levels/english" },
  { name: "Gujarati", icon: gujaratiIcon,  path: "/levels/gujarati" },
];

const QuizSection = () => {
  const navigate = useNavigate();

  return (
    <>
    <Back title="Assessment" />
    <div className="container my-4">
      <h2 className="text-center mb-4">Let's Play</h2>
      <div className="row">
        {categories.map((category, index) => (
          <div 
            key={index} 
            className="col-12 col-md-6 col-lg-8 mb-4" 
            onClick={() => navigate(category.path)}
            style={{ cursor: 'pointer' }}
          >
            <div className="card text-center shadow-lg ">
              <div className="card-body">
                <img 
                  src={category.icon} 
                  alt={category.name} 
                  className="card-img-top mx-auto mb-3" 
                  style={{ width: '80px', height: '80px' }} 
                />
                <h5 className="card-title">{category.name}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default QuizSection;
