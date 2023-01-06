import PropTypes from "prop-types";
import { useState } from "react";
import { Question } from "../models/question.model";

function QuestionItem(props) {
  let question = props.qusetion;

  return (
    <div className="container">
      <h2>{props.question.title}</h2>
      <h2>{props.question.title}</h2>
      <div>Here you write the quistion itself</div>
    </div>
  );
}

export default QuestionItem;
