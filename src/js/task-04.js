let counterValue = 0;

const decrementBtn = document.querySelector(`[data-action="decrement"]`);
const incrementBtn = document.querySelector(`[data-action="increment"]`);
const valueBtn = document.querySelector("#value");

const handleDecrementBtnClick = () => {
  counterValue -= 1;
  valueBtn.textContent = counterValue;
};
const handleIncrementBtnClick = () => {
  counterValue += 1;
  valueBtn.textContent = counterValue;
};

decrementBtn.addEventListener("click", handleDecrementBtnClick);
incrementBtn.addEventListener("click", handleIncrementBtnClick);
