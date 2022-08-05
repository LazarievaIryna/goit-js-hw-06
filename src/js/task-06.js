const textInput = document.querySelector("#validation-input");

const dataLenght = Number(textInput.getAttribute(["data-length"]));

console.log(typeof dataLenght);
textInput.addEventListener("blur", onInputBlur);

function onInputBlur(event) {
  if (event.currentTarget.value.length === dataLenght) {
    textInput.classList.add(`valid`);
    textInput.classList.remove(`invalid`);
  } else {
    textInput.classList.add(`invalid`);
    textInput.classList.remove(`valid`);
  }
}
