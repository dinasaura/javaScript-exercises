function repeatHello(callback){
   const intervalId = setInterval (() => {
    callback('HELLO');
  }, 1000)

  setTimeout(() => {
    clearInterval(intervalId);
  },5000)
}

repeatHello((message) => {
  console.log(message);
}
);