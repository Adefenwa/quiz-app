import { API_URL } from "./config.js";
import { getJSON } from "./helpers.js";

// LOAD API
export const loadQuiz = async function (subject) {
  try {
    const data = await getJSON(`${API_URL}`);
    if (!data) throw new Error("Failed to load questions!");
    // const quizzes = data.quizzes;

    const quiz = data.quizzes.find((q) => {
      const subjectQuestion = q.title.toLowerCase() === subject.toLowerCase();
      // console.log(subjectQuestion);
      return subjectQuestion;
    });
    return quiz;
    // const quizs = quiz.map((el) => {
    //   const questionTitle = el.title;
    //   return questionTitle;
    // });
    // return quizs;
    // console.log(quizs);
  } catch (error) {
    throw error;
  }
};

// loadQuiz();
