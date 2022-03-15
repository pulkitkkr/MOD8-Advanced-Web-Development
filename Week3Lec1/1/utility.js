function sum(a, b){
  return a+b;
}

function multiplication(a,b) {
  return a*b;
}

module.exports = {
  sum: sum,
  multiplication: multiplication
}

// The following snippet will not work
// export default {
//   sum: sum,
//   multiplication: multiplication
// }
