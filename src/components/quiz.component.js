import { useState } from "react";
import QuestionItem from "../components/questionItem.component";
import QuestionsService from "../services/questions.service";

function Quiz() {
  let questionsService = new QuestionsService();
  let initQuestions = questionsService.getQuestions();

  const [quizFinished, setQuizFinished] = useState(false);
  const [questionsList, setQuestionsList] = useState(initQuestions);
  let onAnswerd = function (id, index) {
    let question = questionsList.find((elem) => {
      elem.Id == id;
    });
    question.choosed = index;
    question.isAnswerd = true;
    setQuestionsList(
      questionsList.map((elem) => {
        if (elem.Id == id) {
          elem.IsAnswered = true;
          elem.choosed = index;
        }
      })
    );
    setQuizFinished(
      questionsList.every((elem) => {
        elem.IsAnswered == true;
      })
    );
    return {
      id: id,
      clickedIndex: index,
      correctIndex: question.correctAnswerIndex,
      IsAnswered: true,
    };
  };

  let quizItemsList = questionsList.map((item) => {
    return (
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
    );
  });

  return (
    <div className="quiz container-fluid">
      <h1 className="h1 mb-2 text-center">The Quiz Component</h1>
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
