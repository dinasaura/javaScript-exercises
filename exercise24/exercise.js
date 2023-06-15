const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
};

//const { id, name = person.firstName , surname = person.lastName, old = person.age } = person;

const { id, firstName: name, lastName: surname, age: old } = person;
console.log(id, name, surname, old);