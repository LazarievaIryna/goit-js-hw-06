const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listEl = document.querySelector("#ingredients");


const element = ingredients.map((option) => {
  const ingredientItem = document.createElement("li");
  ingredientItem.textContent = option;
  ingredientItem.classList.add("item");
  return ingredientItem;
});
listEl.append(...element);
