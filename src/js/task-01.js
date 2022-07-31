const categoriesEl = document.querySelectorAll(`.item`).length;
console.log(`Number of categories: ${categoriesEl}`);



// по частям
const categoriesChildren = document.querySelector(`#categories`);
const listItem = categoriesChildren.querySelectorAll(`h2`);
console.log(listItem);

listItem.forEach((element) => console.log(element.textContent));

const ulListEl = document.querySelectorAll(`.item ul`);
ulListEl.forEach((list) => console.log(list.children.length));

///////


const tittleEl = document.querySelectorAll(".item h2");
tittleEl.forEach((element) => {
  console.log(`Category: ${element.textContent}`);
  console.log(`Elements: ${element.nextElementSibling.children.length}`);
  console.log();
});