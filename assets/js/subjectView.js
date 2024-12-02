class Quiz {
  _subjectBtns = document.querySelectorAll(".subject");
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
