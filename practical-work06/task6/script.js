function getFileNameFromPath(path) {
  let fileNameWithExtention = "";
  for (let i = path.length - 1; i >= 0; --i) {
    if (path[i] == "/" || path[i] == "\\") {
      break;
    } else {
      fileNameWithExtention += path[i];
    }
  }

  fileNameWithExtention = fileNameWithExtention.split("").reverse().join("");

  let fileName = "";
  for (let i = 0; i < fileNameWithExtention.length; ++i) {
    if (fileNameWithExtention[i] == ".") { break; }
    fileName += fileNameWithExtention[i];
  }
  return fileName;
}

document.write(`${
  getFileNameFromPath(prompt())
}`);
