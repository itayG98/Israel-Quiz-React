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
      <div className="row-sm-12 text-center">
        <h1 className="h1 mb-2">The Quiz Component</h1>
        <hr></hr>
      </div>
      <ul className="list-group d-flex flex-row flex-wrap justify-content-center">
        {quizItemsList}
      </ul>
    </div>
  );
}

export default Quiz;
