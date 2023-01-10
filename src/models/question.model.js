import { v4 as uuidv4 } from "uuid";

export class Question {
  #id;
  static fromJson = (json) => {
    let title = json["title"];
    let description = json["description"];
    let answers = json["answers"];
    let correctAnswerIndex = json["correctAnswerIndex"];
    let newObj = new Question(title, description, answers, correctAnswerIndex);
    newObj.#id = json["id"];
    return newObj;
  };

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
