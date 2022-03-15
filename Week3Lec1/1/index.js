// import utils from './utility';
var utils = require('./utility')

console.log("Hello");

function MyFunction(){
  console.log("You Called a Function")
}

MyFunction();

const sum = utils.sum(10,20);
console.log(sum);

// REPL -> Read, Eval, Print, Loop
