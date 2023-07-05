import { LocalStorage } from 'node-localstorage';
const localStorage = new LocalStorage('./localStorage');

const user = {
  id: 1,
  name: "John",
  age: 25,
};

function salvaUtente() {
  const userJSON = JSON.stringify(user);

  // salvo la stringa JSON in localStorage
  localStorage.setItem('user', userJSON);

 // console.log("prova:", user);
}

salvaUtente();
//console.log("prova dopo", user);


 