import { API_URL } from "./config.js";
import { getJSON } from "./helpers.js";

export const state = {
  quiz: {},
  questions: {
    question: [],
    options: [],
    answer: [],
    page: 1,
    selectedAnswer: null,
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
    console.log(state.quiz.questions);
    state.questions = {
      question: state.quiz.questions.map((value) => value.question),
      options: state.quiz.questions.map((value) => value.options),
      answer: state.quiz.questions.map((value) => value.answer),
      page: state.questions.page,
    };
    console.log(state.questions);

    return quiz;
  } catch (error) {
    throw error;
  }
};

// let currentPage;

export const getQuestionPerPage = function () {
  const page = state.questions.page - 1;

  return {
    question: state.questions.question[page],
    options: state.questions.options[page],
    answer: state.questions.answer[page],
  };
  // console.log(state.questions);
  // console.log(page);

  // return state.questions.question.slice(page);
};

export const setSelectedAnswer = function (answer) {
  state.questions.selectedAnswer = answer;
};
