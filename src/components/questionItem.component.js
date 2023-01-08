import { useState } from "react";

function QuestionItem(props) {
  let classes = (index) => {
    if (
      question.IsAnswered === true &&
      index === question.correctIndex &&
      question.correctIndex === question.clickedIndex
    )
      return "bg-success";
    else if (
      question.clickedIndex === index &&
      question.correctIndex != question.clickedIndex &&
      question.IsAnswered === true
    ) {
      return "bg-danger";
    } else {
      return "bg-secondary";
    }
  };
  let answerHandler = props.answerHandler;
  let quizFinished = props.quizFinished;
  let questionRetrived = {
    id: props.id,
    clickedIndex: null,
    correctIndex: props.correctIndex,
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
    <div className="card">
      <div className="card-header bg-primary">
        <h2 className="text-center card-title">{props.title}</h2>
      </div>
      <div className="card-body">
        <strong className="card-text">{props.description}</strong>
        <ul>{answersList}</ul>
      </div>
    </div>
  );
}

export default QuestionItem;
