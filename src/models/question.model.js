import { v4 as uuidv4 } from "uuid";

export class Question {
  #id;
  #correctAnswerIndex;
  constructor(title, description, answers, correctAnswerIndex) {
    this.title = title;
    this.description = description;
    this.answers = answers;
    this.#correctAnswerIndex = correctAnswerIndex;
    this.isAnswerd = false;
    this.IsTrue = null;
    this.#id = uuidv4();
    this.Id = this.#id.slice();
    this.onAnswer = function (index) {
      this.isAnswerd = true;
      if (index === this.#correctAnswerIndex) {
        this.IsTrue = true;
      } else {
        this.IsTrue = false;
      }
    };
  }
}

export default Question;
