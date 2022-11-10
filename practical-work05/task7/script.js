function calculateResult() {
  const difference = new Date(
    (new Date(document.getElementById("begin-year").value)) -
    (new Date(document.getElementById("end-year").value))
  );

  document
    .getElementById("result")
    .innerHTML = `years = ${difference.getFullYear() - 1970}<br>
                  months = ${difference.getMonth()}<br>
                  days = ${difference.getDate()}`;
}
