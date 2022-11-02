const object = {};

function isProperty(object) {
  for (const key in object) {
    return false;
  }

  return true;
}

console.log(isProperty(object));
// Prints: "true"

object["la-la"] = "wow";
console.log(isProperty(object));
// Prints: "false"