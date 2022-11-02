const clock = {
  hour: 14,
  minute: 52,
  title: "My clock"
};

function increasesNumbers(object) {
  for (const key in object) {
    if (typeof object[key] == "number") {
      object[key] += 21;
    }
  }
}

increasesNumbers(clock);
console.log(clock);
// Prints: "{hour: 35, minute: 73, title: 'My clock'}"
