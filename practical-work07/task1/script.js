function calculateResult() {
  const string = document.getElementById("string").value;
  const element = document.getElementById("text");

  const textBefore = element.textContent;
  const textAfter = textBefore.replaceAll(
    string, `<b style=\"color: darkred;\">${string}</b>`
  );
  
  if (textBefore == textAfter) {
    alert("Нічого не знайдено!");
  } else {
    element.innerHTML = textAfter;
  }
}
