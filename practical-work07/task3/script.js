document.getElementById("add-button").addEventListener("click", (e) => {
  const element = document.getElementById("menu");
  const linksCount = element.childElementCount;
   
  element.innerHTML += `<a href="##">Посилання ${linksCount + 1}</a>`;
});

document.getElementById("remove-button").addEventListener("click", (e) => {
  const element = document.getElementById("menu");
  const linksCount = element.childElementCount;
  if (linksCount == 0) {
    alert("Уже все видалено!");
  }
   
  element.innerHTML = element.innerHTML.replace(`<a href="##">Посилання ${linksCount}</a>`, "");
});