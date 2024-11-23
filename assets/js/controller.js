"use strict;";
import * as model from "./model.js";
import toggleSwitch from "./toggleView.js";

// CONTROL QUIZ
const controlQuiz = async function () {
  try {
    const qu = await model.loadQuiz();
    console.log(qu);
  } catch (error) {}
};

controlQuiz();

// CONTROL TOGGLE SWITCH
toggleSwitch.addHandlerToggle(() => {
  const isDarkMode = document.body.classList.contains("dark-theme");
  localStorage.setItem("theme", isDarkMode ? "dark" : "light");
});

const applySavedTheme = () => {
  const savedTheme = localStorage.getItem("theme");

  savedTheme === "dark"
    ? document.body.classList.add("dark-theme", "dark__mode")
    : document.body.classList.add("light-theme");
};

applySavedTheme();
const questionTagEL = document.querySelector(".question__tag");
const quizMenuEL = document.querySelector(".quiz__menu");

!quizMenuEL.classList.contains("hidden")
  ? questionTagEL.classList.add("visibility-hidden")
  : questionTagEL.classList.remove("visibility-hidden");

// For the quiz, the things I need are
// 1. Questions
// 2. Options A, B, C, and D
// 3. Correct answer
// 4. Quiz Title
// 5. Icon
class Quiz {
  _data;
}
