const isLogged = "0.6";

const firstPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if(isLogged){
      const randomNumber = Math.random();
      resolve(randomNumber);
    } else{
      reject('user is not logged')
    }
  }, 1000);
});

const secondPromise = (number) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(number > 0.5){
        resolve({ name: 'John', age: 24 })
      } else{
        reject('number in not right');
      }
    }, 1000)
  });
};

firstPromise
  .then((randomNumber) => {
    return secondPromise(randomNumber);
  })
  .then((finalObject) => {
    console.log(finalObject);
  })
  .catch((error) => {
    console.error(error);
  });