import { API_URL } from "./config.js";
import { getJSON } from "./helpers.js";

// LOAD API
export const loadQuiz = async function (subject) {
  try {
    const data = await getJSON(`${API_URL}`);
    if (!data) throw new Error("Failed to load questions!");

    const quiz = data.quizzes.find(
      (quiz) => quiz.title.toLowerCase() === subject.toLowerCase()
    );
    if (!quiz) throw new Error("Subject not found!");
    return quiz;
    // console.log(quiz);
  } catch (error) {
    throw error;
  }
};
