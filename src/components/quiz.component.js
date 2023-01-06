import QuestionItem from "../components/questionItem.component";
import QuestionsService from "../services/questions.service";

function Quiz() {
  let questionsService = new QuestionsService();
  let questionsList = questionsService.getQuestions();
  let quizItemsList = questionsList.map((item) => {
    return (
      <li className="list-group-item m-3" key={item.Id}>
        <QuestionItem question={item} />
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
