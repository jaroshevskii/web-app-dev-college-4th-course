function camalize(text) {
  for (let i = 0; i < text.length; ++i) {
    if (text.charAt(i) == "-" && text.charAt(i + 1) != "-") {
      text = text.replace(`-${text.charAt(i + 1)}`, `${text.charAt(i + 1).toUpperCase()}`);
    }
  }
  return text.replaceAll("-", "");
}

document.write(`${
  camalize(prompt() + "-" + prompt())
}`);
