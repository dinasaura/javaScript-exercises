function repeatHello(callback){
  setInterval (() => {
    callback('HELLO');
  }, 1000)

}

repeatHello((message) => {
  console.log(message);
});

//La funzione freccia è una sintassi più concisa per definire una funzione in JavaScript e può essere utilizzata in modo simile a una funzione normale.