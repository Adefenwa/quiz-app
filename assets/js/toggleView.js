// TOGGLE SWITCH MODE FUNCTIONALITY
class ToggleSwitch {
  _parentElement = document.querySelector(".switch__mode");
  _containerBody = document.querySelector("body");

  addHandlerToggle(handler) {
    this._parentElement.addEventListener("click", () => {
      this._containerBody.classList.toggle("dark__mode");
      this._containerBody.classList.toggle("dark-theme");

      handler();
    });
  }
}

export default new ToggleSwitch();
