// Convert to ES6 Syntax

// Use Arrow Function
function hello(){
  console.log("Hello");
}

// Use Arrow Function
function sum(a,b){
  return a + b
}

// Use Filter and Arrow Function
function getOdd(arr){
  var arrDivisibleBy3 = [];

  for(var i = 0; i < arr.length; i++){
    if(arr[i] % 3 === 0) {
      arrDivisibleBy3.push(arr[i]);
    }
  }

  return arrDivisibleBy3
}

// Use Filter, Reduce and Arrow Function
function getSumOfAllEvenNumbers(arr){
  var arrAllEvenNumbers = [];

  for(var i = 0; i < arr.length; i++){
    if(arr[i] % 2 === 0) {
      arrAllEvenNumbers.push(arr[i]);
    }
  }

  var sum = 0;

  for(var i = 0; i < arrAllEvenNumbers.length; i++){
    sum += arrAllEvenNumbers[i];
  }

  return sum;
}

// Use Arrow function and Map function on Array
function doubleAllEvenTripleAllOdd(arr){

  var result = [];

  for(var i = 0; i < arr.length; i++){
    if(arr[i] % 2 === 0) {
      result.push(arr[i] * 2);
    } else {
      result.push(arr[i] * 3);
    }
  }
}


// convert to Class in ES6 syntax using extends to inherit Computer in Macbook
function Computer(numberOfProcessors){
 this.numberOfProcessors = numberOfProcessors;
}

function MacBook(numberOfProcessors, color){
  Computer.call(this, numberOfProcessors)
  this.color = color;
}

const myMachine = new MacBook(8, "Silver");


// Lastly
// create a file ArrFunction.js and move method getOdd, doubleAllEvenTripleAllOdd, getSumOfAllEvenNumbers to it.
// create a file random.js and move method hello, sum to it.
//  import methods from ArrFunction.js and random.js here and use those methods
