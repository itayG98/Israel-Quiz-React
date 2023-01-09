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
        <div className="form-group">
          <label className="form-label">answer {index + 1}</label>
          <input className="form-control" type="text"></input>
        </div>
      </li>
    );
  });

  return (
    <div className="col-sm-9 m-auto">
      <form onSubmit={onAddQuestion}>
        <div className="form-group">
          <label className="form-label">Title</label>
          <input className="form-control" type="text"></input>
        </div>
        <div className="form-group">
          <label className="form-label">description</label>
          <input className="form-control" type="text"></input>
        </div>
        <div className="form-group">{answers}</div>
      </form>
    </div>
  );
}

export default AddQuizFrom;
