const person1 = {
  id: 1,
  nome: 'Mario',
  cognome: 'Rossi',
  età: 25,
  indirizzo: {
    stato: 'Italia',
    città: 'Roma',
    via: 'Via Romano, 12'
  }
};

const person2 = JSON.parse(JSON.stringify(person1));
person2.indirizzo.città = 'Milano';

console.log(person1);
console.log(person2);