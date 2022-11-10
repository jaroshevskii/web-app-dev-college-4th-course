function calculateResult() {
  let now = new Date();

  let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);

  document
    .getElementById("result")
    .innerHTML = `Кількість секунд, яка пройшла від початку сьогоднішнього дня: ${Math.round((now - today) / 1000)}<br>
      Кількість секунд до початку наступного дня: ${Math.round((tomorrow - now) / 1000)}`;
}