const inputText = document.querySelector(`#name-input`);
const output = document.querySelector(`#name-output`);
const text = "Anonymous";
output.textContent = text;
inputText.addEventListener("input", (evn) => {
  output.textContent = evn.currentTarget.value;
});
