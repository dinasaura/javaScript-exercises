const number = 10;

const checkNumber = new Promise((resolve, reject) => {
  if(number > 10){
    resolve('Number > 10');
  }else{
    reject('Number <= 10');
  }
});

checkNumber
.then((mess) =>{
  console.log(mess);
})
.catch((err) => {
  console.log('Error', err)
})