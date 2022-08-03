const categoriesEl = document.querySelectorAll(`.item`).length;
console.log(`Number of categories: ${categoriesEl}`);



const listTitleEl = document.querySelectorAll(".item h2");

listTitleEl.forEach((element) => {
  console.log(`Category: ${element.textContent}`);
  console.log(`Elements: ${element.nextElementSibling.children.length}`);
});