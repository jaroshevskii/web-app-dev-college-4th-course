function calculateResult() {
  const input = prompt();

  let a = 0;
  let operator = "";
  let stringNumber = "";

  for (let i = 0; i < input.length; i++) {
    if (input.charAt(i) >= "0" && input.charAt(i) <= "9") {
      stringNumber += input.charAt(i);
    } else if (input.charAt(i) == "+" || input.charAt(i) == "-" ||
      input.charAt(i) == "*" || input.charAt(i) == "/") {
      operator = input.charAt(i);
      a = Number(stringNumber);
      stringNumber = "";
    }
  }

  const b = Number(stringNumber);

  let result = 0;

  switch (operator) {
    case "+": result = a + b; break;
    case "-": result = a - b; break;
    case "*": result = a * b; break;
    case "/": result = a / b; break;
  }

  document.write(`${a} ${operator} ${b} = ${result}`);
}

calculateResult();