function filterRangeInPlace(array, a, b) {
  return array.filter(function (item) {
    return item >= a && item <= b;
  });
}

let array = [5, 3, 8, 1];

array = filterRangeInPlace(array, 1, 4);

alert(array);
