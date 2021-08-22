import React, { useState, useEffect } from "react";
import "./Quiz.css" ; 


const FlashCard = ({ question, answer, incrementIndex }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  useEffect(() => setShowAnswer(false), [question]);

  return (
    <>
      <div 
        className="chatbot-background1"
         onClick={() => setShowAnswer(!showAnswer)}
      >
        {!showAnswer && question}
        {showAnswer && answer}
      </div>
      {showAnswer 
      }
    </>
  );
};

export default FlashCard;
