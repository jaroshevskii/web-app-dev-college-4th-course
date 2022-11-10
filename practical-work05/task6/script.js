function calculateResult() {
  const year = Number(document.getElementById("year").value);

  const x = (year % 100 < 50) ? 1 : 2;
  const c = Math.trunc(year / 100) + 1;
  const m = Math.trunc(year / 1000) + 1;

  document.getElementById("result").innerHTML = `x = ${x}<br>
                                                 c = ${c}<br>
                                                 m = ${m}`;
}
