import { useState, props } from "react";

function AddQuizFrom() {
  let AddQuestion = props.addQuestionHandler;
  let onAddQuestion = function () {
    AddQuestion({});
  };

  return (
    <div className="col-sm-9 m-auto">
      <form onSubmit={onAddQuestion}>
        <div className="form-group">
          <label className="form-label">Title</label>
          <input className="form-control" type="text"></input>
        </div>
      </form>
    </div>
  );
}

export default AddQuizFrom;
