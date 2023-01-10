import { Question } from "../models/question.model";
import { useState, useEffect } from "react";

export class QuestionsService {
  URL = "http://localhost:3004/questions";
  questions = [];
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
        0
      ),
      new Question(
        "Colors",
        "Which color Israels flag have?",
        [
          "Red and blue",
          "Off-white and green",
          "Blue and white",
          "Green , yellow and red",
        ],
        2
      ),
    ];
  }

  getQuestions() {
    return this.questions.slice();
  }

  getQuestionsById(id) {
    return this.questions.find((q) => q.Id == id).slice();
  }

  AddQuestion(question) {
    this.questions.push(question);
  }

  async postQuestions(question) {
    fetch(this.URL, {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(...question),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
  async getQuestionsAsync() {
    const response = await fetch(URL);
    const data = response.json;
    return Question.fromJson(data);
  }
}

export default QuestionsService;
