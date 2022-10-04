function reverseSort(array) {
  return array.sort().reverse();
}

let array = [5, 2, 1, -10, 8];

array = reverseSort(array);

alert(array);
