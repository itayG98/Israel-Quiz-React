import { useState } from "react";
///title, description, answers, correctAnswerIndex

function AddQuizFrom(props) {
  let addQuestion = props.addQuestionHandler;
  let onAddQuestion = function () {
    addQuestion({});
  };

  let answers = [...Array(4)].map((num, index) => {
    return (
      <li className="list-group-item m-3" key={index}>
        <div className="form-group ">
          <label className="form-label fw-bolder">answer {index + 1}</label>
          <input className="form-control" type="text"></input>
        </div>
      </li>
    );
  });

  return (
    <div className="col-sm-9 m-auto">
      <form onSubmit={onAddQuestion}>
        <div className="form-group card mt-3">
          <label className="form-label fw-bolder">Title</label>
          <input className="form-control" type="text"></input>
        </div>
        <div className="form-group card mt-3">
          <label className="form-label fw-bolder">description</label>
          <input className="form-control" type="text"></input>
        </div>
        <div className="form-group card mt-3">
          <h3 className="card-header">Answers</h3>
          <div className="card-body">
            <ul class="list-group list-group-flush">{answers}</ul>
          </div>
        </div>
        <div className="form-group card mt-3">
          <button type="submit" className="btn btn-primary">
            Add Question
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddQuizFrom;
