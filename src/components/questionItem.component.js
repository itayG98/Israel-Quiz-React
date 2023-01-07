import { useState } from "react";

function QuestionItem(props) {
  let answerHandler = props.answerHandler;
  let questionRetrived = {
    id: props.id,
    clickedIndex: null,
    isTrue: null,
    IsAnswered: null,
  };
  const [question, setQuestion] = useState(questionRetrived);

  function onAnswer(event, index) {
    let questionState = answerHandler(questionRetrived.id, index);
    setQuestion(questionState);
  }

  let answersList = props.answers.map((answer, index) => {
    return (
      <li className="list-group-item m-3" key={index}>
        <input
          onClick={(event) => onAnswer(event, index)}
          className={
            "form-control " +
            (question.isTrue && question.IsAnswered
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
      <h2>{props.title}</h2>
      <strong>{props.description}</strong>
      <ul>{answersList}</ul>
    </div>
  );
}

export default QuestionItem;
