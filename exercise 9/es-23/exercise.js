const person = {
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
}

let keys = Object.keys(person);


keys.forEach(function(key) {
  console.log(key + ": " + person[key]);
});

