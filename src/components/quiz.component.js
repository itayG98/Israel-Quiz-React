import QuestionItem from "../components/questionItem.component";
import QuestionsService from "../services/questions.service";
import { v4 as uuidv4 } from "uuid";

function Quiz() {
  let questionsService = new QuestionsService();
  let questionsList = questionsService.getQuestions();
  let onAnswerd = function (id, index) {
    let answerd = questionsService.getQuestionsById(id);
    if (answerd) {
      answerd.onAnswer(index);
      return {
        id: id,
        clickedIndex: index,
        isTrue: answerd.IsTrue,
        IsAnswered: true,
      };
    }
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
