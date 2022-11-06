function calculateResult() {
  const date = new Date();

  function getMonthDescription() {
    switch (date.getMonth()) {
      case 0: return "січеня";
      case 1: return "лютого";
      case 2: return "березеня";
      case 3: return "квітеня";
      case 4: return "травеня";
      case 5: return "червеня";
      case 6: return "липеня";
      case 7: return "серпеня";
      case 8: return "вересеня";
      case 9: return "жовтеня";
      case 10: return "листопада";
      case 11: return "груденя";
    }
  }

  function getWeekDescription() {
    switch (date.getDay()) {
      case 0: return "Неділя";
      case 1: return "Понеділок";
      case 2: return "Вівторок";
      case 3: return "Середа";
      case 4: return "Четвер";
      case 5: return "П'ятниця";
      case 6: return "Субота";
    }
  }

  document
    .getElementById("date-value")
    .innerHTML = `${date.getDay()} ${getMonthDescription()} ${date.getFullYear()} року`;

  document
    .getElementById("week-value")
    .innerHTML = `${getWeekDescription()}`;

  function getHoursDescription() {
    const hours = date.getHours();
    return hours < 10 ? `0${hours}` : `${hours}`;
  }

  function getMinutesDescription() {
    const minutes = date.getMinutes();
    return minutes < 10 ? `0${minutes}` : `${minutes}`;
  }

  function getSecondsDescription() {
    const seconds = date.getSeconds();
    return seconds < 10 ? `0${seconds}` : `${seconds}`;
  }

  document
    .getElementById("time-value")
    .innerHTML = `${getHoursDescription()}:${getMinutesDescription()}:${getSecondsDescription()}`;
}