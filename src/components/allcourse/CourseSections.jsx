import React from "react";
import { Link, useParams } from "react-router-dom";
import './courseSections.css'; // Import the custom CSS file
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
      <div className="sections">
        <h1 className="sections__title">Sections</h1>
        <div className="sections__list">
          {sections.map((section, index) => (
            <div key={index} className="sections__card">
              <Link to={`/learn/${courseId}/${section}`} className="sections__link">
                <h1 className="sections__card-title">
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </h1>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CourseSections;
