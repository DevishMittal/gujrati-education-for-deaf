import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Back from "../common/back/Back";
import a from "../../assets/images/quiz1/a.png"
import b from "../../assets/images/quiz1/b.png"
import f from "../../assets/images/quiz1/f.png"
import g from "../../assets/images/quiz1/g.png"
import e from "../../assets/images/quiz1/e.png"
import m from "../../assets/images/quiz1/m.png"
import apple from "../../assets/images/quiz1/apple.svg"
import banana from "../../assets/images/quiz1/banan.png"
import one from "../../assets/images/quiz1/1.svg"
import zero from "../../assets/images/quiz1/0.svg"
import three from "../../assets/images/quiz1/3.svg"
import five from "../../assets/images/quiz1/5.svg"
import six from "../../assets/images/quiz1/6.svg"
import eight from "../../assets/images/quiz1/8.svg"
import donkey from "../../assets/images/quiz1/donkey.png"
import dog from "../../assets/images/quiz1/dog.svg"
import rabit from "../../assets/images/quiz1/rabit.png"
import zebra from "../../assets/images/quiz1/zebra.svg"
import bear from "../../assets/images/quiz1/bear.webp"
import camel from "../../assets/images/quiz1/camel.png"
import ka from "../../assets/images/quiz1/ka.png"
import dha from "../../assets/images/quiz1/dha.jpg"
import ga from "../../assets/images/quiz1/ga.jpg"
import jha from "../../assets/images/quiz1/jha.jpg"
import na from "../../assets/images/quiz1/na.jpg"
import tha from "../../assets/images/quiz1/tha.jpg"


const questions = {
    english: {
      easy: [
        { question: "A", options: [{ text:"1.",image:a},{text:"2.",image:b}], answer: "1." },
        { question: "F", options: [{ text:"1.",image:g},{text:"2.",image:f}], answer: "2." },
        { question: "M", options: [{ text:"1.",image:e},{text:"2.",image:m}], answer: "2." },
      ],
      medium: [
        { question: "Apple", options: [{ text:"1.",image:apple},{text:"2.",image:banana}], answer: "1." },
        { question: "Apple", options: [{ text:"1.",image:apple},{text:"2.",image:banana}], answer: "1." },
        { question: "Apple", options: [{ text:"1.",image:apple},{text:"2.",image:banana}], answer: "1." },
      ],
      hard: [
        { question: "Apple", options: [{ text:"1.",image:apple},{text:"2.",image:banana}], answer: "1." },
        { question: "Apple", options: [{ text:"1.",image:apple},{text:"2.",image:banana}], answer: "1." },
        { question: "Apple", options: [{ text:"1.",image:apple},{text:"2.",image:banana}], answer: "1." },
      ],
    },
    maths: {
      easy: [
        { question: "[1]", options: [{ text:"1.",image:one},{text:"2.",image:zero}], answer: "1." },
        { question: "[3]", options: [{ text:"1.",image:three},{text:"2.",image:five}], answer: "1." },
        { question: "[8]", options: [{ text:"1.",image:six},{text:"2.",image:eight}], answer: "2." },
      ],
      medium: [
        { question: "[8]", options: [{ text:"1.",image:six},{text:"2.",image:eight}], answer: "2." },
        { question: "[1]", options: [{ text:"1.",image:one},{text:"2.",image:zero}], answer: "1." },
        { question: "[3]", options: [{ text:"1.",image:three},{text:"2.",image:five}], answer: "1." },
      ],
      hard: [
        { question: "[3]", options: [{ text:"1.",image:three},{text:"2.",image:five}], answer: "1." },
        { question: "[1]", options: [{ text:"1.",image:one},{text:"2.",image:zero}], answer: "1." },
        { question: "[8]", options: [{ text:"1.",image:six},{text:"2.",image:eight}], answer: "2." },
      ],
    },
    science: {
      easy: [
        { question: "dog", options: [{ text:"1.",image:bear},{text:"2.",image:dog}], answer: "2." },
        { question: "zebra", options: [{ text:"1.",image:zebra},{text:"2.",image:camel}], answer: "1." },
        { question: "rabit", options: [{ text:"1.",image:rabit},{text:"2.",image:zebra}], answer: "1." },
      ],
      medium: [
        { question: "zebra", options: [{ text:"1.",image:zebra},{text:"2.",image:camel}], answer: "1." },
        { question: "rabit", options: [{ text:"1.",image:rabit},{text:"2.",image:zebra}], answer: "1." },
        { question: "dog", options: [{ text:"1.",image:bear},{text:"2.",image:dog}], answer: "2." },
      ],
      hard: [
        { question: "dog", options: [{ text:"1.",image:bear},{text:"2.",image:dog}], answer: "2." },
        { question: "zebra", options: [{ text:"1.",image:zebra},{text:"2.",image:camel}], answer: "1." },
        { question: "rabit", options: [{ text:"1.",image:rabit},{text:"2.",image:zebra}], answer: "1." },
      ],
    },
    gujarati: {
      easy: [
        { question: "ka", options: [{ text:"1.",image:ka},{text:"2.",image:dha}], answer: "1." },
        { question: "ga", options: [{ text:"1.",image:ga},{text:"2.",image:na}], answer: "1." },
        { question: "jha", options: [{ text:"1.",image:tha},{text:"2.",image:jha}], answer: "2." },
      ],
      medium: [
        { question: "ga", options: [{ text:"1.",image:ga},{text:"2.",image:na}], answer: "1." },
        { question: "jha", options: [{ text:"1.",image:dha},{text:"2.",image:jha}], answer: "2." },
        { question: "ka", options: [{ text:"1.",image:ka},{text:"2.",image:dha}], answer: "1." },
      ],
      hard: [
        { question: "jha", options: [{ text:"1.",image:dha},{text:"2.",image:jha}], answer: "2." },
        { question: "ka", options: [{ text:"1.",image:ka},{text:"2.",image:dha}], answer: "1." },
        { question: "ga", options: [{ text:"1.",image:ga},{text:"2.",image:na}], answer: "1." },
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
      <>
      <Back title="Assessment" />
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
                onClick={() => handleAnswer(option.text)}
                className="btn btn-outline-primary d-block w-100 mb-2"
              >
                {option.image ? (
                  <img src={option.image} alt={option.text} style={{ maxWidth: '50px', marginRight: '10px' }} />
                ) : null}
                {option.text}
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
      </>
    );
  };
  
  export default Quiz;