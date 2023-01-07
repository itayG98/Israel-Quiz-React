import { v4 as uuidv4 } from "uuid";

export class Question {
  #id;

  constructor(title, description, answers, correctAnswerIndex) {
    this.title = title;
    this.description = description;
    this.answers = answers;
    this.correctAnswerIndex = correctAnswerIndex;
    this.isAnswerd = false;
    this.choosed = null;
    this.#id = uuidv4();
    this.Id = this.#id.slice();
  }
}

export default Question;
