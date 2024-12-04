class Quiz {
  _subjectBtns = document.querySelectorAll(".subject");
  _questionSectionContainer = document.querySelector(".subject__question");
  _homeMenuPage = document.querySelector(".quiz__menu");
  _questionTag = document.querySelector(".question__tag");

  _tagTitle = document.querySelector(".question__tag--title");
  _tagIcon = document.querySelector(".tag-icon");
  showQuestionPage() {
    this._homeMenuPage.classList.add("hidden");
    this._questionSectionContainer.classList.remove("hidden");
    this._questionTag.classList.remove("visibility-hidden");
  }

  showSubjectTag(tag) {
    this._tagTitle.textContent = tag;
  }

  showSubjectTagIcon(icon) {
    const tagEL = document.createElement("img");
    tagEL.src = icon;

    this._tagIcon.appendChild(tagEL);
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
