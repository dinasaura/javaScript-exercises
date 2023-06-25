 class MyArray extends Array{
    sum(){
        return this.reduce((a,b)=> a + b);
    }
 }

 class NestedClass extends MyArray{
    max() {
        let output = -100000;
        this.forEach((el) => {
            if(el > output){
                output = el;
            }
        })
        //1,1> -100000(true), outout =1
        //50, 50 > 1 (true), output = 50
        // 3, 3 > 50 (false),
        return output;

    }
 }

 let arr = new MyArray(2,3,4,5,2);
 console.log(arr.sum());
 let mapped = arr.map((a) => a + 4);
 console.log(mapped.sum());
  let origiArr = new MyArray(2,3,4,5,2);
  if(origiArr instanceof MyArray){
    console.log(origiArr.sum());
  }
  // NestedClass -> MyArray -> Array
  let nested = new NestedClass(4,3,3,4,2)
  console.log(nested instanceof Array);
  console.log(nested instanceof MyArray);
  console.log(nested instanceof NestedClass);
