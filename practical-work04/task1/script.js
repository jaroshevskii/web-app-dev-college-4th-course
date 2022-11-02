let programer = {
  name: "Sasha",
  surname: "Jaroshevskii"
};
console.log(programer);
// {name: 'Sasha', surname: 'Jaroshevskii'}

programer.name = "Vlad";
console.log(programer);
// {name: 'Vlad', surname: 'Jaroshevskii'}

delete programer.name;
console.log(programer);
// {surname: 'Jaroshevskii'}