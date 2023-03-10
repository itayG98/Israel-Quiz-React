import { useState } from "react";
import Question from "../models/question.model";
///title, description, answers, correctAnswerIndex

function AddQuizFrom(props) {
  const answersLength = 4;
  let addQuestion = props.addQuestionHandler;

  let onAddQuestion = function () {
    let form = document.querySelector("form");
    if (form.checkValidity() === true) {
      let title = document.querySelector("input[name=title]").value;
      let description = document.querySelector("input[name=description]").value;
      let answers = [];
      let correctAnswerIndex = +document.querySelector(
        "input[name=options]:checked"
      ).value;
      let answersInputs = document.querySelectorAll("input.answer");
      Array.from(answersInputs).map((inpt) => answers.push(inpt.value));
      addQuestion(
        new Question(title, description, answers, correctAnswerIndex)
      );
      form.querySelector("input:checked").checked = false;
      form
        .querySelectorAll("input[type=text]")
        .forEach((inpt) => (inpt.value = ""));
    }
  };

  let answers = [...Array(answersLength)].map((num, index) => {
    return (
      <li className="list-group-item m-3" key={index}>
        <div className="form-group ">
          <label className="form-label fw-bolder">answer {index + 1}</label>
          <input
            className="form-control answer"
            type="text"
            name={index}
            required
            minLength={3}
          ></input>
          <input
            type="radio"
            className="btn-check"
            name="options"
            id={"btn" + index}
            value={index}
            required
          />
          <label className="btn btn-outline-success" htmlFor={"btn" + index}>
            Correct Answer
          </label>
        </div>
      </li>
    );
  });

  return (
    <div className="col-sm-9 m-auto">
      <form>
        <div className="form-group card mt-3">
          <label className="form-label fw-bolder">Title</label>
          <input
            className="form-control"
            required
            minLength={3}
            type="text"
            name="title"
          ></input>
        </div>
        <div className="form-group card mt-3">
          <label className="form-label fw-bolder">description</label>
          <input
            className="form-control"
            type="text"
            name="description"
            required
            minLength={3}
          ></input>
        </div>
        <div className="form-group card mt-3">
          <h3 className="card-header">Answers</h3>
          <div className="card-body">
            <ul className="list-group list-group-flush">{answers}</ul>
          </div>
        </div>
        <div className="form-group card mt-3">
          <button
            type="button"
            className="btn btn-primary"
            onClick={onAddQuestion}
          >
            Add Question
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddQuizFrom;
