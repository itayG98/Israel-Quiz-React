import { useState } from "react";

function QuestionItem(props) {
  let classes = (index) => {
    if (question.clickedIndex == index && question.isTrue == true)
      return "bg-success";
    else {
      return "bg-secondary";
    }
  };
  let answerHandler = props.answerHandler;
  let quizFinished = props.quizFinished;
  let questionRetrived = {
    id: props.id,
    clickedIndex: null,
    correctIndex : props.correctIndex,
    IsAnswered: null,
  };

  const [question, setQuestion] = useState(questionRetrived);

  function onAnswer(event, index) {
    if (question.IsAnswered == null) {
      let questionState = answerHandler(questionRetrived.id, index);
      setQuestion(questionState);
    }
  }

  let answersList = props.answers.map((answer, index) => {
    return (
      <li className="list-group-item m-3" key={index}>
        <input
          onClick={(event) => onAnswer(event, index)}
          className={"form-control " + classes(index)}
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
