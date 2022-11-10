function camalize(text) {
  for (let i = 0; i < text.length; ++i) {
    if (text[i] >= "A" && text[i] <= "Z") {
      text.replace(text[i], `${text[i].toLowerCase()}-`);
    }
    console.log(text[i]);
  }
  return text;
}

document.write(`${
  camalize(prompt())
}`);
