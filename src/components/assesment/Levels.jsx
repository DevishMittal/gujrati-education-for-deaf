import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const levels = ["Easy", "Medium", "Hard"];

const Levels = () => {
  const navigate = useNavigate();
  const { category } = useParams();

  return (
    <div className="container my-4">
      <h2 className="text-center mb-4">{category} - Select Difficulty Level</h2>
      <div className="row">
        {levels.map((level, index) => (
          <div 
            key={index} 
            className="col-12 col-md-6 col-lg-4 mb-4"
            onClick={() => navigate(`/quiz/${category}/${level.toLowerCase()}`)}
            style={{ cursor: 'pointer' }}
          >
            <div className="card text-center shadow-sm">
              <div className="card-body">
                <h5 className="card-title">{level}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Levels;
