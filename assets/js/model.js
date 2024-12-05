import { API_URL } from "./config.js";
import { getJSON } from "./helpers.js";

export const state = {
  quiz: {},
  questions: {
    question: [],
    options: [],
    answer: [],
    page: 1,
  },
};
// LOAD API
export const loadQuiz = async function (subject) {
  try {
    const data = await getJSON(`${API_URL}`);
    if (!data) throw new Error("Failed to load questions!");

    const quiz = data.quizzes.find(
      (quiz) => quiz.title.toLowerCase() === subject.toLowerCase()
    );
    if (!quiz) throw new Error("Subject not found!");

    state.quiz = {
      title: quiz.title,
      icon: quiz.icon,
      questions: quiz.questions,
    };
    console.log(state.questions);
    // console.log(quiz);
    return quiz;
  } catch (error) {
    throw error;
  }
};

// let currentPage;

export const getQuestionPerPage = function (page) {
  console.log(state.questions);
};
