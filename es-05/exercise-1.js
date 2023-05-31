const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

const person2 = person1;

person2.firstName = 'Simon';

console.log(person1);
console.log(person2);

// il nome sia della prima persona che della seconda è stato modificato
// perchè person2 fa riferimento allo stesso oggetto della person1 non è solo una copia di essa