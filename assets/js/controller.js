"use strict;";
import * as model from "./model.js";
import toggleSwitch from "./toggleView.js";
import subjectQuiz from "./subjectView.js";
import subjectView from "./subjectView.js";

// CONTROL QUIZ
const controlQuiz = async function (subject) {
  try {
    // 1. Fetching the API
    const quiz = await model.loadQuiz(subject);
    console.log(quiz);

    // 2. Toggling question page
    subjectQuiz.showQuestionPage();

    // 3. Rendering the tag icon
    subjectQuiz.renderTag(quiz.icon, quiz.title);

    // 4. Rendering questions
    // subjectQuiz.renderQuestion(quiz.questions);

    // 5. Pagination
    controlPagination();

    controlSubmit();

    // 6. Slider
    // return quiz;
    // console.log(quiz.icon);

    // console.log(quiz);
  } catch (error) {
    console.error(error);
  }
};

const controlPagination = () => {
  const currentQuestion = model.getQuestionPerPage().question;
  const currentPage = model.state.questions.page;
  const totalQuestions = model.state.questions.question.length;
  const options = model.getQuestionPerPage().options;
  const answer = model.getQuestionPerPage().answer;

  console.log(model.getQuestionPerPage().options);
  console.log(answer);

  subjectQuiz.renderQuestion(
    currentQuestion,
    currentPage,
    totalQuestions,
    options
  );
};

// controlQuiz("html");
subjectQuiz.addHandlerSubject(controlQuiz);

// CONTROL TOGGLE SWITCH
toggleSwitch.addHandlerToggle(() => {
  const isDarkMode = document.body.classList.contains("dark-theme");
  localStorage.setItem("theme", isDarkMode ? "dark" : "light");
});

// APPLY SAVED THEME
const applySavedTheme = () => {
  const savedTheme = localStorage.getItem("theme");

  savedTheme === "dark"
    ? document.body.classList.add("dark-theme", "dark__mode")
    : document.body.classList.add("light-theme");
};

applySavedTheme();

// const controlOptionSelection = (selectedAnswer) => {
//   console.log(selectedAnswer);
//   model.setSelectedAnswer(selectedAnswer);
// };

const controlSubmit = () => {
  const selectedAnswer = model.state.questions.selectedAnswer;
  const correctAnswer = model.getQuestionPerPage().answer;

  if (selectedAnswer === correctAnswer) {
    subjectQuiz.showResult(true);
    subjectQuiz.updateSubmitButtonText("Next");
  } else {
    subjectQuiz.showResult(false);
  }
};

// controlOptionSelection();
