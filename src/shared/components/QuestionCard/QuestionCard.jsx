'use client'

import { useState } from "react";
import styles from "./QuestionCard.module.css";

const QuestionCard = ({ id, title, description }) => {
  const [currentCard, setCurrentCard] = useState(true);

  const handleQuestionCard = () => {
    setCurrentCard(!currentCard);
  };

  const cardOperator = currentCard ? "+" : "–";

  return (
    <div className={`${styles.questionCard}`}>
      <div style={{ display: "flex", gap: "16px" }}>
        <span className={styles.questionId}>{id}</span>
        <div className={styles.questionText}>
          <h3 className={styles.questionTitle}>{title}</h3>
          <p
            className={styles.questionDescription}
            style={currentCard ? { display: "none" } : { display: "block" }}
          >
            {description}
          </p>
        </div>
      </div>

      <button onClick={handleQuestionCard} className={styles.questionBtn}>
        {cardOperator}
      </button>
    </div>
  );
};

export default QuestionCard;
