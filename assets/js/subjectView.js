class Quiz {
  _subjectBtns = document.querySelectorAll(".subject");
  _questionSectionContainer = document.querySelector(".subject__question");
  _homeMenuPage = document.querySelector(".quiz__menu");
  _questionTag = document.querySelector(".question__tag");

  _questionContainer = document.querySelector(".question-parent-container");
  showQuestionPage() {
    this._homeMenuPage.classList.add("hidden");
    this._questionSectionContainer.classList.remove("hidden");
    this._questionTag.classList.remove("visibility-hidden");
  }

  renderTag(icon, tagName) {
    const markup = `
        <div class="icon tag-icon">
          <img src="${icon}" alt="${tagName}">
            
          </div>
          <h4 class="question__tag--title">${tagName}</h4>
    `;
    this._questionTag.insertAdjacentHTML("afterbegin", markup);
  }

  renderQuestion(questions) {
    questions.forEach((q, index, arr) => {
      const markup = `
                  <p class="subject__question-number">
                  Question <span class="current">${index + 1}</span> of
                  <span class="total">${arr.length}</span>
                </p>
                <h1 class="question">
                  ${q.question}
                </h1>
              `;
      this._questionContainer.insertAdjacentHTML("beforeend", markup);
    });
  }

  addHandlerSubject(handler) {
    this._subjectBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        const selectedSubject = btn.dataset.subject;
        handler(selectedSubject);
      });
    });
  }
}

export default new Quiz();
