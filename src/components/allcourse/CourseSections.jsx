import React from "react";
import { Link, useParams } from "react-router-dom";
import './courseSections.css'; // Make sure this is properly linked
import Back from "../common/back/Back";
// Define sections for each course
const courseSections = {
  1: ["alphabets", "fruits", "vegetables"], // English sections
  2: ["counting", "addition", "subtraction"], // Maths sections
  3: ["Birds", "Land Animals"], // Science sections
  4: ["Alphabets"],
};

const CourseSections = () => {
  const { courseId } = useParams(); // Get courseId from URL parameters
  const sections = courseSections[courseId] || []; // Get sections based on courseId

  return (
    <>
    <Back />
    <div className="container my-5 sections-container">
      <h1 className="text-center mb-4">Sections</h1>
      <div className="row justify-content-center">
        {sections.map((section, index) => (
          <div key={index} className="col-12 col-md-6 col-lg-5 mb-1 d-flex justify-content-center">
            <div className="card section-card text-center shadow-sm">
              <div className="card-body">
                <Link to={`/learn/${courseId}/${section}`} className="section-link">
                  <h1 className="section-title">
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </h1>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default CourseSections;
