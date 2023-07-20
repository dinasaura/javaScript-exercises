// fetch('https://fakestoreapi.com/products/')
// .then((response) => response.json())
// .then((result)=> console.log(result))
// //npm init -y


// function filterToDo(array){
//     const completed = [];
//     const notCompleted = [];

//     array.forEach(element => {
//         if(!element.completed){
//             notCompleted.push(element)
//         }else{
//             completed.push(element)
//         }
//     });
//     sessionStorage.setItem('nonComplete', JSON.stringify(notCompleted));
//     //    localStorage.setItem('nonComplete', JSON.stringify(notCompleted));   
//     //se si usa local storage i dati rimangono nella memoria 

//     // localStorage.removeItem('nonComplete') 
//     // per sovrascrivere/remuovere i dati salvati
//     console.log(JSON.parse(sessionStorage.getItem('non completate')))
// }


// fetch('https://jsonplaceholder.typicode.com/todos')
// .then((res) => res.json())
// .then(() => filterToDo())
// .then((err)=> console.log(err))


//Crea una funzione sum che prende un array come parametro,
// se l'array è vuoto lancia un errore "Error at function sum:
// array is empty" altrimenti restituisce la somma degli elementi
// (N.B. aggiunti l'elemento solo se è un numero).

// function sum(arr) {
//     if (arr.length === 0) { //if (arr?.length ) 
//        throw new Error("Error");
//     }
  
//     let result = 0;
//     for (let i = 0; i < arr.length; i++) {
//       if (typeof arr[i] === "number") {
//         result += arr[i];
//       }

//     }

//     // return array.reduce((sum, el) => {
//     //     if(typeof arr[i] === 'number'){ return sum + el } else {return sum}
//     // }, 0)
  
//     return result;
//   }
//   const array = [1, 2, 3, 4, 5];
// console.log(sum(array)); 


// const emptyArray = [];
// console.log(sum(emptyArray));


//Scrivi una funzione mergeArrays che prende un numero indefinito di array come parametri e restituisce il risultato dell'unione degli array.
// Effettua una sanificazione dell'array finale eliminando tutti i valori undefined o null. Bonus: controlla che ogni parametro sia effettivamente un array.

function mergeArray(...rest){
    const returnResult = [].concat(...rest);

    const returnFilter = returnResult.filter((val) => {
        return val !== undefined && val !== null;
    })

    // let array = {};
    //[...array]

    return returnFilter;
    

}

console.log(mergeArray([2,3],[null, 5], [undefined, {x : 1}]))
