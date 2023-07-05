const isLogged = true;

const firstPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (isLogged) {
      const randomNumber = Math.random();
      resolve(randomNumber);
    } else {
      reject(new Error("user is not logged"));
    }
  }, 1000);
});

const secondPromise = (inputNumber) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (inputNumber > 0.5) {
        resolve({ name: "John", age: 24 });
      } else {
        reject(new Error("number in not right"));
      }
    }, 1000);
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
  })
  .finally(() => {
    console.log("Promise completed");
  });