const object = {
  // vova: 5,
  // serg: 4,
  // sasha: 3
};

function averageBal(object) {
  let sum = 0;
  let count = 0;
  for (const key in object) {
    ++count;
    sum += object[key];
  }

  return count == 0 ? 0 : sum / count;
}

console.log(averageBal(object));
// Prints: "4"