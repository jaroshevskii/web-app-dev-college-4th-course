function camalize(text) {
  for (let i = 0; i < text.length; ++i) {
    if (text[i] >= "A" && text[i] <= "Z") {
      text = text.replace(text[i], `${text[i].toLowerCase()}-`);
    }
  }
  return text;
}

document.write(`${camalize(prompt())}`);
