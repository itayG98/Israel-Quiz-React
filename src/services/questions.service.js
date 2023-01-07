import { Question } from "../models/question.model";

export class QuestionsService {
  constructor() {
    // constructor(title, description, answers, correctAnswerIndex)
    this.questions = [
      new Question(
        "israel state",
        "when did israel state was established?",
        ["1950", "1920", "1948", "1947"],
        2
      ),
      new Question(
        "Prime minisiters",
        "Which Prime minisiter serve the most in term of office in years?",
        [
          "Benjamin Netanyahu",
          "David Ben-Gurion",
          "Ariel Sharon",
          "Naftali Bennett",
        ],
        0
      ),
      new Question(
        "capital city",
        "What is the capital of Israel?",
        ["Tel Aviv", "Gan Yavne", "Jersusalem", "Shuk Mahne Yehuda"],
        2
      ),
      new Question(
        "acronym",
        "What is ILS?",
        [
          "Israeli new Shekel",
          "Israel new Shimon",
          "Israel new State",
          "Nothing",
        ],
        2
      ),
      new Question(
        "Colors",
        "Which color Israels flag have?",
        [
          "Red anf blue",
          "Off-white and green",
          "Blue and white",
          "Grenn , yellow and red",
        ],
        2
      ),
    ];
  }

  getQuestions() {
    return this.questions;
  }
  getQuestionsById(id) {
    return this.questions.find((q) => q.Id == id);
  }
}

export default QuestionsService;
