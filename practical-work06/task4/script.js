function getSortedArray(text) {
  return text.split(" ").sort();
}

document.write(`${
  getSortedArray(prompt())
}`);
