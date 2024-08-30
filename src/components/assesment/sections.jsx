import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

// Example questions for each level and category
const questions = {
    english: {
      easy: [
        { question: "What is the past tense of 'go'?", options: ["Went", "Goed"], answer: "Went" },
        { question: "Which of these is a noun?", options: ["Run", "Cat"], answer: "Cat" },
        { question: "Choose the correct spelling.", options: ["Receive", "Recieve"], answer: "Receive" },
      ],
      medium: [
        { question: "What is a synonym for 'happy'?", options: ["Sad", "Joyful"], answer: "Joyful" },
        { question: "Which sentence is correct?", options: ["I is happy.", "I am happy."], answer: "I am happy." },
        { question: "What is the antonym of 'bright'?", options: ["Dark", "Light"], answer: "Dark" },
      ],
      hard: [
        { question: "What is a metaphor?", options: ["A direct comparison", "A figure of speech"], answer: "A figure of speech" },
        { question: "What is a hyperbole?", options: ["Exaggeration", "Understatement"], answer: "Exaggeration" },
        { question: "Who wrote 'Hamlet'?", options: ["Shakespeare", "Dickens"], answer: "Shakespeare" },
      ],
    },
    maths: {
      easy: [
        { question: "What is 5 + 3?", options: ["8", "7"], answer: "8" },
        { question: "What is 10 - 4?", options: ["6", "5"], answer: "6" },
        { question: "What is 2 x 2?", options: ["4", "5"], answer: "4" },
      ],
      medium: [
        { question: "What is 12 ÷ 4?", options: ["3", "4"], answer: "3" },
        { question: "What is the square root of 49?", options: ["7", "6"], answer: "7" },
        { question: "What is 15% of 200?", options: ["30", "20"], answer: "30" },
      ],
      hard: [
        { question: "What is the value of π?", options: ["3.14", "2.14"], answer: "3.14" },
        { question: "Solve for x: 2x = 10", options: ["5", "10"], answer: "5" },
        { question: "What is the derivative of x²?", options: ["2x", "x"], answer: "2x" },
      ],
    },
    science: {
      easy: [
        { question: "What planet is closest to the sun?", options: ["Mercury", "Venus"], answer: "Mercury" },
        { question: "What is H2O?", options: ["Water", "Hydrogen"], answer: "Water" },
        { question: "What do plants need to make food?", options: ["Sunlight", "Moonlight"], answer: "Sunlight" },
      ],
      medium: [
        { question: "What gas do humans breathe in?", options: ["Oxygen", "Carbon Dioxide"], answer: "Oxygen" },
        { question: "What is the chemical symbol for gold?", options: ["Au", "Ag"], answer: "Au" },
        { question: "What is the powerhouse of the cell?", options: ["Mitochondria", "Nucleus"], answer: "Mitochondria" },
      ],
      hard: [
        { question: "What is the speed of light?", options: ["299,792 km/s", "300,000 km/s"], answer: "299,792 km/s" },
        { question: "What is Newton's third law?", options: ["Action and reaction", "Force and mass"], answer: "Action and reaction" },
        { question: "What is the boiling point of water in Celsius?", options: ["100°C", "90°C"], answer: "100°C" },
      ],
    },
    gujarati: {
      easy: [
        { question: "What is the Gujarati word for 'Hello'?", options: ["Kem Cho", "Namaste"], answer: "Kem Cho" },
        { question: "Translate 'Pani' to English.", options: ["Water", "Milk"], answer: "Water" },
        { question: "What is the Gujarati script called?", options: ["Gujarati", "Devanagari"], answer: "Gujarati" },
      ],
      medium: [
        { question: "What is the Gujarati word for 'Food'?", options: ["Khana", "Roti"], answer: "Khana" },
        { question: "Translate 'Manav' to English.", options: ["Human", "Animal"], answer: "Human" },
        { question: "What is the Gujarati word for 'Book'?", options: ["Pustak", "Kitab"], answer: "Pustak" },
      ],
      hard: [
        { question: "Who wrote 'Saraswatichandra'?", options: ["Govardhanram Tripathi", "Narmad"], answer: "Govardhanram Tripathi" },
        { question: "Translate 'Ghar' to English.", options: ["Home", "Garden"], answer: "Home" },
        { question: "What is the Gujarati word for 'Peace'?", options: ["Shanti", "Yudh"], answer: "Shanti" },
      ],
    }
  };
  

  const Quiz = () => {
    const { category, level } = useParams();  // Retrieve the category and level from the URL
    const navigate = useNavigate();
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [completed, setCompleted] = useState(false);
  
    // Handle answering a question
    const handleAnswer = (selected) => {
      if (selected === questions[category][level][currentQuestion].answer) {
        setScore(score + 1);
      }
      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < questions[category][level].length) {
        setCurrentQuestion(nextQuestion);
      } else {
        setCompleted(true);
      }
    };
  
    return (
      <div className="container my-4">
        {!completed ? (
          <div className="quiz-card p-4">
            <h3 className="mb-3">Take the Quiz</h3>
            <h5 className="mb-3">
              {currentQuestion + 1}. {questions[category][level][currentQuestion].question}
            </h5>
            {questions[category][level][currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(option)}
                className="btn btn-outline-primary d-block w-100 mb-2"
              >
                {option}
              </button>
            ))}
            <div className="text-muted mt-3">{currentQuestion + 1} of {questions[category][level].length}</div>
          </div>
        ) : (
          <div className="completion-card p-4 text-center">
            <h2>Quiz Complete!</h2>
            <p>Your Score: {score} out of {questions[category][level].length}</p>
            <button onClick={() => navigate('/')} className="btn btn-primary mt-3">Go Home</button>
          </div>
        )}
      </div>
    );
  };
  
  export default Quiz;