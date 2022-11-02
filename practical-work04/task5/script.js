let calculator = {
  a: 0,
  b: 0,
  read() {
    a = Number(prompt("a = "));
    b = Number(prompt("b = "));
  },
  sum() { return a + b; },
  mul() { return a * b; }
};

calculator.read();

alert(`a + b = ${calculator.sum()}`);
alert(`a * b = ${calculator.mul()}`);