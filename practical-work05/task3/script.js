function calculateResult() {
  const date = new Date()

  date.setTime(
    date.getTime() - 24 * 60 * 60 * 1000 * Number(
      document.getElementById("days").value
    )
  );

  function getMonthDescription() {
    switch (date.getMonth()) {
      case 0: return "Січень";
      case 1: return "Лютий";
      case 2: return "Березень";
      case 3: return "Квітень";
      case 4: return "Травень";
      case 5: return "Червень";
      case 6: return "Липень";
      case 7: return "Серепень";
      case 8: return "Вересень";
      case 9: return "Жовтень";
      case 10: return "Листопад";
      case 11: return "Грудень";
    }
  }

  document.getElementById("result").innerHTML = `${date.getDate()} ${getMonthDescription()} ${date.getFullYear()}`;
}