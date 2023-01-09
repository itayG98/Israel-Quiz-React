import { useState } from "react";

function QuestionItem(props) {
  let classes = (index) => {
    if (quizFinished) {
      if (index === question.correctIndex) {
        return "bg-success";
      } else if (
        question.clickedIndex === index &&
        question.correctIndex != index
      ) {
        return "bg-danger";
      }
    } else if (index === question.clickedIndex) {
      return "bg-warning";
    }
    return "bg-secondary";
  };

  let answerHandler = props.addQuestionHandler;
  let quizFinished = props.quizFinished;
  let questionRetrived = {
    id: props.id,
    clickedIndex: null,
    correctIndex: props.correctIndex,
    IsAnswered: null,
  };

  const [question, setQuestion] = useState(questionRetrived);

  function onAnswer(event, index) {
    if (!quizFinished) {
      let questionState = answerHandler(questionRetrived.id, index);
      setQuestion(questionState);
    }
  }

  let answersList = props.answers.map((answer, index) => {
    return (
      <li className="list-group-item m-3" key={index}>
        <a
          onClick={(event) => onAnswer(event, index)}
          className={"form-control btn " + classes(index)}
        >
          {answer}
        </a>
      </li>
    );
  });

  return (
    <div className="card">
      <div className="card-header bg-primary">
        <h2 className="text-center card-title text-light">{props.title}</h2>
      </div>
      <div className="card-body">
        <strong className="card-text">{props.description}</strong>
        <ul>{answersList}</ul>
      </div>
    </div>
  );
}

export default QuestionItem;
