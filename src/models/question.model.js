import { v4 as uuidv4 } from "uuid";

export class Question {
  constructor(title, description, answers, correctAnswerIndex) {
    this.id = 0;
    this.title = title;
    this.description = description;
    this.answers = answers;
    this.correctAnswerIndex = correctAnswerIndex;
    this.isAnswerd = false;
    this.choosed = null;
  }
}

export default Question;
