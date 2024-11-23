import { API_URL } from "./config.js";
import { getJSON } from "./helpers.js";

// LOAD API
export const loadQuiz = async function () {
  try {
    const data = await getJSON(`${API_URL}`);

    const quiz = data.quizzes;

    const quizs = quiz.map((el) => {
      return el;
    });
    return quizs;
  } catch (error) {
    throw error;
  }
};

loadQuiz();
