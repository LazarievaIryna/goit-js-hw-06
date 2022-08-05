const inputEl = document.querySelector("#font-size-control");
const spanEl = document.querySelector("span#text");

inputEl.addEventListener("input", onRangeElement);

function onRangeElement(event) {
  spanEl.style.fontSize = `${event.currentTarget.value}px`;
  console.log(event);
}
