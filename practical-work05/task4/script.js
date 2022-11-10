function calculateResult() {
  let date = new Date(
    Number(document.getElementById('year').value),
    Number(document.getElementById('month').value),
    0
  );

  document.getElementById("result").innerHTML = `Останній день місяця ${date.getDate()}`;
}