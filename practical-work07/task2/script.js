// MAKR: Task 1

document.querySelector("[task1-button1]").addEventListener("click", (e) => {
  document.querySelector("[task1-text]").innerHTML = "Button 1";
});
document.querySelector("[task1-button2]").addEventListener("mouseover", (e) => {
  document.querySelector("[task1-text]").innerHTML = "Button 2";
});
document.querySelector("[task1-button3]").addEventListener("dblclick", (e) => {
  document.querySelector("[task1-text]").innerHTML = "Button 3";
});

// MARK: Task 2

document.getElementById("task2-button").addEventListener("click", (e) => {
  alert(document.getElementById("task2-text").value);
});

// MARK: Task 3

document.getElementById("task3-button").addEventListener("click", (e) => {
  document.getElementById("task3-text").value = "Текст змінився";
});

// MARK: Task 4

document.getElementById("task4-button").addEventListener("click", (e) => {
  document.getElementById("task4-image").src = "./assets/image2.png";
});

// MARK: Task 5

document.getElementById("task5-text").addEventListener("click", (e) => {
  document.getElementById("task5-text").value = "Нажми на меня!";
});

// MARK: Task 6

document.getElementById("task6-text").addEventListener("click", (e) => {
  document.getElementById("task6-text").value = "Текст змінився";
});

// MARK: Task 7

document.getElementById("task7-button").addEventListener("click", (e) => {
  document.getElementById("task7-button").textContent = "Ку-ку";
});

// MARK: Task 8

document.getElementById("task8-button").addEventListener("click", (e) => {
  document.getElementById("task8-button").textContent = "О, теперь на меня больше не нажать!";
  document.getElementById("task8-button").disabled = true;
});

// MARK: Task 9

document.getElementById("task9-image").addEventListener("mouseover", (e) => {
  document.getElementById("task9-image").src = "./assets/image2.png";
});
document.getElementById("task9-image").addEventListener("mouseleave", (e) => {
  document.getElementById("task9-image").src = "./assets/image1.png";
});