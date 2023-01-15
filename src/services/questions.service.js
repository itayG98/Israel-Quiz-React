import axios from "axios";
import { Question } from "../models/question.model";
//Model :  ctor(title, description, answers, correctAnswerIndex)

const API_URL = process.env.REACT_APP_API_URL;
const QUESTIONS_ROUTE = process.env.REACT_APP_QUESTIONS_ROUTE;

const URL = API_URL + QUESTIONS_ROUTE;
export class QuestionsService {
  get() {
    return axios.get(URL);
  }

  getById(id) {
    return axios.get(URL + id);
  }

  post(question) {
    question.id = 0;
    question.Id = 0;
    return axios.post(URL, question);
  }

  put(question) {
    return axios.put(URL + question.Id, question);
  }

  delete(id) {
    return axios.delete(URL + id);
  }
}

export default QuestionsService;
