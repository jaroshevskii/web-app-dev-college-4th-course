function camalize(text) {
  for (let i = 0; i < text.length; ++i) {
    if (text.charAt(i) == "-" && text.charAt(i + 1) != "-") {
      text = text.replace(`-${text.charAt(i + 1)}`, `${text.charAt(i + 1).toUpperCase()}`);
    }
  }
  return text.replaceAll("-", "");
}

let text = prompt("Write something in the kebab-case");
document.write(`<p><b>Input:</b> ${text}</p>`);

text = camalize(text);

document.write(`<p><b>Output:</b> ${text}</p>`);
