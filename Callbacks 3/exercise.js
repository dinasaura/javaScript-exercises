function repeatHello(callback){
   const intervalId = setInterval (() => {
    console.log('HELLO');
  }, 1000)

  setTimeout(() => {
    clearInterval(intervalId);
  },5000)
}

repeatHello();