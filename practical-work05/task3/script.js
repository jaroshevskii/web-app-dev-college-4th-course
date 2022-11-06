function calculateResult() {
  const date = new Date()

  date.setTime(
    date.getTime() - 24 * 60 * 60 * 1000 * Number(
      document.getElementById("text").value
    )
  );

  document.getElementById("output").innerHTML = `${date}`;
}