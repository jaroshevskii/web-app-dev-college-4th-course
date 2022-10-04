function arraySort(array) {
  return [...array].sort();
}

const array = ["HTML", "JavaScript", "CSS"];
const arraySorted = arraySort(array);

alert(arraySorted);
alert(array);
