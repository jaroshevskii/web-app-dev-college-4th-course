function getSumOfDigits(text) {
  let sum = 0;
  for (let i = 0; i < text.length; i++) {
    if (text[i] >= "0" || text[i] <= "9") {
      sum += Number(text[i]);
    }
  }
  return sum;
}

document.write(`Sum of digits: ${
  getSumOfDigits(prompt())
}`);
