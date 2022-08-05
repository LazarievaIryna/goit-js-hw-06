// const inputText = document.querySelector(`#name-input`);
// const output = document.querySelector(`#name-output`);
// const text = "Anonymous";
// output.textContent = text;
// inputText.addEventListener("input", (evn) => {
//   output.textContent = evn.currentTarget.value;
// });

const inputText = document.querySelector(`#name-input`);
const output = document.querySelector(`#name-output`);

const text = "Anonymous";
inputText.addEventListener("input", (evn) => {
  output.textContent = inputText.value === "" ? text : evn.currentTarget.value;
});
