const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25,
};

const { id, age } = person; 

const filteredPerson = { id, age }; 

const json = JSON.stringify(filteredPerson); 

console.log(json); // Should return: { "id": 1, "age": 25 }