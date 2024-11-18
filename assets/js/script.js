"use strict;";
import { API_URL } from "./config.js";
import { getJSON } from "./helpers.js";

// LOAD API
const loadAPI = async function () {
  try {
    const data = await getJSON(`${API_URL}`);
    console.log(data);
  } catch (error) {
    console.error(error.message);
  }
};

loadAPI();

const sModeEL = document.querySelector(".switch__mode");
const containerBody = document.querySelector("body");
const questionTagEL = document.querySelector(".question__tag");
const quizMenuEL = document.querySelector(".quiz__menu");

!quizMenuEL.classList.contains("hidden")
  ? questionTagEL.classList.add("visibility-hidden")
  : questionTagEL.classList.remove("visibility-hidden");

// TOGGLE SWITCH MODE FUNCTIONALITY
const toggleSwitch = () => {
  sModeEL.addEventListener("click", () => {
    // body.classList.toggle('dark-theme')
    containerBody.classList.toggle("dark__mode");
    containerBody.classList.toggle("dark-theme");
  });
};

toggleSwitch();
