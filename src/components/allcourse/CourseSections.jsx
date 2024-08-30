import React from "react";
import { Link, useParams } from "react-router-dom";

// Define sections for each course
const courseSections = {
  1: ["alphabets", "fruits", "vegetables"], // English sections
  2: ["counting", "addition", "subtraction", "multiplication", "division", "tables"], // Maths sections
  3: ["plants", "animals", "earth", "space"], // Science sections
  4: ["Alphabets"],
};

const CourseSections = () => {
  const { courseId } = useParams(); // Get courseId from URL parameters
  const sections = courseSections[courseId] || []; // Get sections based on courseId

  return (
    <div className="sections">
      <h1>Select a section to learn</h1>
      <ul>
        {sections.map((section, index) => (
          <li key={index}>
            <Link to={`/learn/${courseId}/${section}`}>
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseSections;
