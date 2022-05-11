import React, { useState } from "react";
import { useContext } from "react";
import { Context } from "../../context";
import UserRoute from "../../components/routes/UserRoute";
import {BrowserRouter as Router, Link} from "react-router-dom"




function quizIntro() {
  // Properties
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const questions = [
    {
      text: "Question1",
      options: [
        { id: 0, text: "A", isCorrect: false },
        { id: 1, text: "B", isCorrect: false },
        { id: 2, text: "C", isCorrect: false },
        { id: 3, text: "D", isCorrect: true },
      ],
    },
    {
      text: "Question2",
      options: [
        { id: 0, text: "A", isCorrect: false },
        { id: 1, text: "B", isCorrect: true },
        { id: 2, text: "C", isCorrect: false },
        { id: 3, text: "D", isCorrect: false},
      ],
    },
    {
      text: "Question3",
      options: [
        { id: 0, text: "A", isCorrect: false },
        { id: 1, text: "B", isCorrect: false },
        { id: 2, text: "C", isCorrect: true },
        { id: 3, text: "D", isCorrect: false },
      ],
    },
    {
      text: "Question4",
      options: [
        { id: 0, text: "A", isCorrect: true },
        { id: 1, text: "B", isCorrect: false },
        { id: 2, text: "C", isCorrect: false },
        { id: 3, text: "D", isCorrect: false },
      ],
    },
    {
      text: "Question5",
      options: [
        { id: 0, text: "A", isCorrect: false },
        { id: 1, text: "B", isCorrect: true },
        { id: 2, text: "C", isCorrect: false },
        { id: 3, text: "D", isCorrect: false },
      ],
    },
  ];
   

  // Helper Functions

  /* A possible answer was clicked */
  const optionClicked = (isCorrect) => {
    // Increment the score
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  /* Resets the game back to default */
  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResults(false);
  };


  return (
    <UserRoute>
    <div className="App">
      {/* 1. Header  */}
      <h1>Lesson Seven Assessment</h1>

      {/* 2. Current Score  */}
      <h2>Score: {score}</h2>

      {/* 3. Show results or show the question game  */}
      {showResults ? (
        /* 4. Final Results */
        <div className="final-results">
          <h1>Final Results</h1>
          <h2>
            {score} out of {questions.length} correct - (
            {(score / questions.length) * 100}%)
          </h2>
          
        </div>
      ) : (
        /* 5. Question Card  */
        <div className="question-card">
          {/* Current Question  */}
          <h2>
            Question: {currentQuestion + 1} out of {questions.length}
          </h2>
          <h3 className="question-text">{questions[currentQuestion].text}</h3>

          {/* List of possible answers  */}
          <ul>
            {questions[currentQuestion].options.map((option) => {
              return (
                <li
                  key={option.id}
                  onClick={() => optionClicked(option.isCorrect)}
                >
                  {option.text}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
    </UserRoute>
   
  );
}

export default quizIntro;
