// function sum(num1, num2, num3, num4, num5, ) {
//     return num1 + num2 + num3 + num4 + num5;
// }
function sum(...rests){
    let sum = 0;
    for (let rest of rests){
        sum += rest
    }
    return sum
}


console.log(sum(1, 2, 3, 4, 5));