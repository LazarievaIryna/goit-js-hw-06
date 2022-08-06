const btnChangeColor = document.querySelector(".change-color");
const spanColor = document.querySelector(".color");

btnChangeColor.addEventListener("click", onChangeColorBtn);
function onChangeColorBtn() {
  const colorRandom = getRandomHexColor();
  console.log(colorRandom);
  document.body.style.backgroundColor = colorRandom;
  spanColor.textContent = colorRandom;
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
