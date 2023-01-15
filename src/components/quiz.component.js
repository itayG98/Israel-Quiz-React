import { useState, useEffect } from "react";
import QuestionItem from "../components/questionItem.component";
import QuestionsService from "../services/questions.service";
import AddQuizFrom from "./addQuizForm.component";

function Quiz() {
  let cursorPointer = { cursor: "pointer" };
  const questionsService = new QuestionsService();
  const [isAddingQuestion, setAddingQuestion] = useState(false);
  const [isDeleteMode, setDeleteMode] = useState(false);
  const [quizFinished, setQuizFinished] = useState(false);
  const [questionsList, setQuestionsList] = useState([]);

  useEffect(() => {
    questionsService.get().then((response) => setQuestionsList(response.data));
  }, []);

  let onToggleAddQuestion = function () {
    if (!isAddingQuestion) {
      setAddingQuestion(true);
    } else {
      setAddingQuestion(false);
    }
  };

  let onToggleDeleteMode = function () {
    setDeleteMode(!isDeleteMode);
  };

  let onSubmit = function () {
    let quizState = questionsList.every((elem) => elem.IsAnswered === true);
    if (!quizState) {
    }
    setQuizFinished(quizState);
    setAddingQuestion(false);
  };

  let modalContent = function () {
    if (quizFinished) {
      let score = 0;
      questionsList.forEach((elem) => {
        if (elem.choosed === elem.correctAnswerIndex) {
          score += 1;
        }
      });
      return `You scored ${(score / questionsList.length) * 100}`;
    } else {
      return "Please answer all the god damn qusetions!!!";
    }
  };

  let onAnswerd = function (id, index) {
    let questionNumber = questionsList.findIndex((elem) => elem.id === id);
    if (questionNumber === -1) return undefined;
    questionsList[questionNumber].IsAnswered = true;
    questionsList[questionNumber].choosed = index;
    setQuestionsList(questionsList);
    return {
      id: id,
      clickedIndex: index,
      correctIndex: questionsList[questionNumber].correctAnswerIndex,
      IsAnswered: true,
    };
  };

  let onAddQuestion = (question) => {
    if (question) {
      let newQuestion = { ...question, id: 0 };
      questionsService.post(newQuestion).then(
        (resp) => {
          if (resp.status === 200) {
            setAddingQuestion(false);
          }
        },
        (err) => {
          console.log(err.message);
        }
      );
    }
  };

  let onDelete = function (id) {
    let index = questionsList.findIndex((q) => q.id === id);
    if (index > -1) {
      questionsService.delete(id).then((resp) => {
        if (resp.statusText === 200) {
          setDeleteMode(false);
        }
      });
    }
  };

  let quizItemsList = questionsList.map((item) => {
    return (
      <div className="col-sm-9" key={item.id}>
        <li className="list-group-item m-3" id={item.id}>
          <QuestionItem
            id={item.id}
            answers={item.answers}
            correctIndex={item.correctAnswerIndex}
            description={item.description}
            title={item.title}
            addQuestionHandler={onAnswerd}
            quizFinished={quizFinished}
          />
          {isDeleteMode ? (
            <div className="container-fluid d-flex justify-content-center">
              <button
                onClick={() => onDelete(item.id)}
                className="btn btn-danger"
              >
                Delete
              </button>
            </div>
          ) : undefined}
        </li>
      </div>
    );
  });

  return (
    <div className="quiz container-fluid">
      <nav className="navbar bg-success sticky-top">
        <div className="container-fluid">
          <h1 className=" text-light ">The Israeli Quiz</h1>
          <div className="ms-5">
            <button
              className="btn btn-outline-light ms-2"
              onClick={onToggleAddQuestion}
            >
              Add Question
            </button>
            <button
              className="btn btn-outline-danger ms-2"
              onClick={onToggleDeleteMode}
            >
              Delete Mode
            </button>
          </div>
        </div>
      </nav>
      <div className="row-sm-10">
        <ul className="list-group d-flex flex-row flex-wrap justify-content-center">
          {quizItemsList}
        </ul>
        <div className="row-sm-10">
          <div className="col-sm-9 m-auto">
            <button
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              className="btn btn-primary form-control"
              onClick={onSubmit}
            >
              I Am Sure!
            </button>
          </div>
        </div>
      </div>
      <div
        className="modal fade "
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">{modalContent()}</div>
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
      {isAddingQuestion === true ? (
        <div className="row-sm-10">
          <AddQuizFrom addQuestionHandler={onAddQuestion} />
        </div>
      ) : undefined}

      <hr></hr>
      <footer className="card-footer text-muted">
        <p
          style={cursorPointer}
          onClick={() => {
            window.location.replace("https://github.com/itayG98");
          }}
        >
          GitHub : @ItayG98
        </p>
      </footer>
    </div>
  );
}

export default Quiz;
