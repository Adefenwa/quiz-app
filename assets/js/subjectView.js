class Quiz {
  _subjectBtns = document.querySelectorAll(".subject");
  _questionSectionContainer = document.querySelector(".subject__question");
  _homeMenuPage = document.querySelector(".quiz__menu");
  _questionTag = document.querySelector(".question__tag");

  _questionContainer = document.querySelector(".question-parent-container");
  _optionsContainer = document.querySelector(".options");
  _submitBtn = document.querySelector(".btn--submit");

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

  // renderQuestion(questions) {
  //   questions.forEach((q, index, arr) => {
  //     const markup = `
  //                 <p class="subject__question-number">
  //                 Question <span class="current">${index + 1}</span> of
  //                 <span class="total">${arr.length}</span>
  //               </p>
  //               <h1 class="question">
  //                 ${q.question}
  //               </h1>
  //             `;
  //     this._questionContainer.insertAdjacentHTML("beforeend", markup);
  //   });
  // }

  renderQuestion(question, currentPage, totalQuestions, options) {
    this._questionContainer.innerHTML = "";

    const markup = `
                <p class="subject__question-number">
                  Question <span class="current">${currentPage}</span> of
                  <span class="total">${totalQuestions}</span>
                </p>
                <h1 class="question">
                  ${question}
                </h1>
              `;

    this._questionContainer.insertAdjacentHTML("beforeend", markup);
    this.renderOptions(options);
  }

  renderOptions(options) {
    const markup = options.map(
      (option, index) => `
                <button type="submit" class="option option__${String.fromCharCode(
                  65 + index
                ).toLowerCase()}" data-id='${index}'>
                  <div class="row--one">
                    <h5 class="option__letter">${String.fromCharCode(
                      65 + index
                    )}</h5>
                    <h5 class="option__title">${option}</h5>
                  </div>
                  <div class="row--two hidden">
                    <div class="icon--correct">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        viewBox="0 0 40 40"
                        fill="none"
                      >
                        <path
                          d="M20 5C21.9698 5 23.9204 5.38799 25.7403 6.14181C27.5601 6.89563 29.2137 8.00052 30.6066 9.3934C31.9995 10.7863 33.1044 12.4399 33.8582 14.2597C34.612 16.0796 35 18.0302 35 20C35 21.9698 34.612 23.9204 33.8582 25.7403C33.1044 27.5601 31.9995 29.2137 30.6066 30.6066C29.2137 31.9995 27.5601 33.1044 25.7403 33.8582C23.9204 34.612 21.9698 35 20 35C16.0218 35 12.2064 33.4196 9.3934 30.6066C6.58035 27.7936 5 23.9782 5 20C5 16.0218 6.58035 12.2064 9.3934 9.3934C12.2064 6.58035 16.0218 5 20 5ZM20 7.5C16.6848 7.5 13.5054 8.81696 11.1612 11.1612C8.81696 13.5054 7.5 16.6848 7.5 20C7.5 23.3152 8.81696 26.4946 11.1612 28.8388C13.5054 31.183 16.6848 32.5 20 32.5C23.3152 32.5 26.4946 31.183 28.8388 28.8388C31.183 26.4946 32.5 23.3152 32.5 20C32.5 16.6848 31.183 13.5054 28.8388 11.1612C26.4946 8.81696 23.3152 7.5 20 7.5ZM18.125 22.605L25.3 15.41C25.5201 15.1877 25.8155 15.0559 26.1279 15.0408C26.4404 15.0257 26.7471 15.1282 26.9876 15.3282C27.2282 15.5283 27.3849 15.8112 27.427 16.1211C27.4691 16.4311 27.3935 16.7456 27.215 17.0025L27.07 17.1775L19.01 25.2575C18.8035 25.465 18.5307 25.5933 18.2392 25.6203C17.9478 25.6473 17.6561 25.5711 17.415 25.405L17.24 25.26L12.865 20.885C12.6435 20.6645 12.5127 20.3691 12.4982 20.0569C12.4838 19.7448 12.5868 19.4385 12.7869 19.1985C12.9871 18.9586 13.2699 18.8022 13.5795 18.7604C13.8892 18.7186 14.2033 18.7942 14.46 18.9725L14.635 19.115L18.125 22.605Z"
                          fill="#26D782"
                        />
                      </svg>
                    </div>
                    <div class="icon--wrong">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        viewBox="0 0 40 40"
                        fill="none"
                      >
                        <path
                          d="M20 5C21.9698 5 23.9204 5.38799 25.7403 6.14181C27.5601 6.89563 29.2137 8.00052 30.6066 9.3934C31.9995 10.7863 33.1044 12.4399 33.8582 14.2597C34.612 16.0796 35 18.0302 35 20C35 21.9698 34.612 23.9204 33.8582 25.7403C33.1044 27.5601 31.9995 29.2137 30.6066 30.6066C29.2137 31.9995 27.5601 33.1044 25.7403 33.8582C23.9204 34.612 21.9698 35 20 35C16.0218 35 12.2064 33.4196 9.3934 30.6066C6.58035 27.7936 5 23.9782 5 20C5 16.0218 6.58035 12.2064 9.3934 9.3934C12.2064 6.58035 16.0218 5 20 5ZM20 7.5C16.6848 7.5 13.5054 8.81696 11.1612 11.1612C8.81696 13.5054 7.5 16.6848 7.5 20C7.5 23.3152 8.81696 26.4946 11.1612 28.8388C13.5054 31.183 16.6848 32.5 20 32.5C23.3152 32.5 26.4946 31.183 28.8388 28.8388C31.183 26.4946 32.5 23.3152 32.5 20C32.5 16.6848 31.183 13.5054 28.8388 11.1612C26.4946 8.81696 23.3152 7.5 20 7.5ZM14.5975 14.915L14.74 14.74C14.9471 14.5333 15.2202 14.4058 15.5117 14.3798C15.8031 14.3538 16.0945 14.4308 16.335 14.5975L16.51 14.74L20 18.2325L23.49 14.74C23.6971 14.5333 23.9702 14.4058 24.2617 14.3798C24.5531 14.3538 24.8445 14.4308 25.085 14.5975L25.26 14.74C25.4667 14.9471 25.5942 15.2202 25.6202 15.5117C25.6462 15.8031 25.5692 16.0945 25.4025 16.335L25.26 16.51L21.7675 20L25.26 23.49C25.4667 23.6971 25.5942 23.9702 25.6202 24.2617C25.6462 24.5531 25.5692 24.8445 25.4025 25.085L25.26 25.26C25.0529 25.4667 24.7798 25.5942 24.4883 25.6202C24.1969 25.6462 23.9055 25.5692 23.665 25.4025L23.49 25.26L20 21.7675L16.51 25.26C16.3029 25.4667 16.0298 25.5942 15.7383 25.6202C15.4469 25.6462 15.1555 25.5692 14.915 25.4025L14.74 25.26C14.5333 25.0529 14.4058 24.7798 14.3798 24.4883C14.3538 24.1969 14.4308 23.9055 14.5975 23.665L14.74 23.49L18.2325 20L14.74 16.51C14.5333 16.3029 14.4058 16.0298 14.3798 15.7383C14.3538 15.4469 14.4308 15.1555 14.5975 14.915Z"
                          fill="#EE5454"
                        />
                      </svg>
                    </div>
                  </div>
                </button>
                
    `
    );
    this._optionsContainer.insertAdjacentHTML("beforeend", markup);
  }

  addHandlerSubject(handler) {
    this._subjectBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        const selectedSubject = btn.dataset.subject;
        handler(selectedSubject);
      });
    });
  }

  addHandlerOptionSelection(handler) {
    this._optionsContainer.addEventListener("click", (e) => {
      const option = e.target.closest(".option");
      if (!option) return;

      // const optionId = option.dataset.id;
      // handler(optionId);
      const selectedAnswer = option.querySelector(".option__title").textContent;
      handler(selectedAnswer);
    });
  }

  showResult(isCorrect) {
    const resultMessage = isCorrect ? "Correct" : "Wrong";

    alert(resultMessage);
  }

  addHandlerSubmit(handler) {
    this._submitBtn.addEventListener("click", handler);
    handler();
  }

  updateSubmitButtonText(text) {
    this._submitBtn.textContent = text;
  }
}

export default new Quiz();
