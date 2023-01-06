import PropTypes from "prop-types";
import { useState } from "react";
import { Question } from "../models/question.model";

function QuestionItem(props) {
  let questionRetrived = {
    answers: props.question.answers,
    correctAnswerIndex: props.question.correctAnswerIndex,
    id: props.question.Id,
    isTrue: null,
    answered: null,
  };
  const [question, setQuestion] = useState(questionRetrived);

  function onAnswer(event, index) {
    questionRetrived.answered = true;
    questionRetrived.isTrue = question.answered =
      question.correctAnswerIndex == index;
    setQuestion(questionRetrived);
  }

  let answersList = questionRetrived.answers.map((answer, index) => {
    return (
      <li className="list-group-item m-3" key={index}>
        <input
          onClick={(event, index) => onAnswer(event, index)}
          className={
            "form-control " +
            (question.isTrue && question.answered
              ? "bg-success"
              : "bg-secondary")
          }
          type="button"
          value={answer}
        ></input>
      </li>
    );
  });

  return (
    <div className="container">
      <h2>{props.question.title}</h2>
      <strong>{props.question.description}</strong>
      <ul>{answersList}</ul>
    </div>
  );
}

export default QuestionItem;
