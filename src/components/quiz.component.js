import { useState } from "react";
import QuestionItem from "../components/questionItem.component";
import QuestionsService from "../services/questions.service";

function Quiz() {
  let questionsService = new QuestionsService();
  let initQuestions = questionsService.getQuestions();
  const [quizFinished, setQuizFinished] = useState(false);
  const [questionsList, setQuestionsList] = useState(initQuestions);

  let onAnswerd = function (id, index) {
    let questionNumber = questionsList.findIndex((elem) => elem.Id === id);
    if (questionNumber === -1) return undefined;
    questionsList[questionNumber].IsAnswered = true;
    questionsList[questionNumber].choosed = index;
    setQuestionsList(questionsList);
    let quizState = questionsList.every((elem) => elem.IsAnswered === true);
    setQuizFinished(quizState);
    return {
      id: id,
      clickedIndex: index,
      correctIndex: questionsList[questionNumber].correctAnswerIndex,
      IsAnswered: true,
    };
  };

  let quizItemsList = questionsList.map((item) => {
    return (
      <div className="col-sm-9">
        <li className="list-group-item m-3" key={item.Id}>
          <QuestionItem
            id={item.Id}
            answers={item.answers}
            description={item.description}
            title={item.title}
            answerHandler={onAnswerd}
            quizFinished={quizFinished}
          />
        </li>
      </div>
    );
  });

  return (
    <div className="quiz container-fluid">
      <h1 className="h1 mb-2 text-center bg-success text-light">
        The Israeli Quiz{" "}
      </h1>
      <hr className=""></hr>
      <div className="row-sm-10">
        <ul className="list-group d-flex flex-row flex-wrap justify-content-center">
          {quizItemsList}
        </ul>
      </div>
    </div>
  );
}

export default Quiz;
