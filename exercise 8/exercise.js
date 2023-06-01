function multiplyByTwo(value) {
  let number = 2;
  
  function inner() {
    return value * number;
  }
  
  return inner;
}

let result = multiplyByTwo(4)();
console.log(result);
