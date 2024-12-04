"use strict;";
import * as model from "./model.js";
import toggleSwitch from "./toggleView.js";
import subjectQuiz from "./subjectView.js";

// CONTROL QUIZ
const controlQuiz = async function (subject) {
  try {
    const quiz = await model.loadQuiz(subject);
    subjectQuiz.showQuestionPage();
    subjectQuiz.showSubjectTag(quiz.title);
    subjectQuiz.showSubjectTagIcon(quiz.icon);
    // return quiz;
    console.log(quiz);

    // console.log(quiz);
  } catch (error) {
    console.error(error);
  }
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

// Question Tag Removed
const questionTagEL = document.querySelector(".question__tag");
const btnHTML = document.querySelector(".html");
const quizMenuContainer = document.querySelector(".quiz__menu");
const subjectQuestionsContainer = document.querySelector(".subject__question");
