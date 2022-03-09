// var arr = [1,2,3,4,5,6,7,8];
//
//
// // double the value of each element;
// function double_the_values(list){
//   var arrCopy = arr.map(function(el){
//   return el + "-"
//   })
//
//   console.log("inside function", arrCopy);
// }
// double_the_values(arr);
// console.log("outside function", arr);
//
// var a = {
//   b: 10
// };
//
// var c = a.b;
//
// c = 33;
//
// console.log("Accessing A -->", a.b);
// console.log("Accessing C -->", c);

//
// function modifyString(s){
//   s += ".......";
//   console.log("s inside", s);
// }
//
// var s1 = "String1";
// var s2 = s1;
//
// modifyString(s2);
//
// console.log("S1 outside", s1);
// console.log("S2 outside", s2);



// [{name: ..., yearlySalary: ....}, {name: ..., yearlySalary: ....}]
// var newArr = arrOfObj.map(function(el){
//
//   var valueToReturn = {
//     name: el.firstName + " " + el.firstName,
//     yearlySalary: 12 * el.monthlySalary
//   }
//
//   return valueToReturn;
// })

var arrOfObj = [
  { firstName: "Person", lastName: "Last",  monthlySalary: 3000},
  { firstName: "Lucas", lastName: "Marrier",  monthlySalary: 400},
  { firstName: "John", lastName: "Dablo",  monthlySalary: 2344},
  { firstName: "Jack", lastName: "Sharx",  monthlySalary: 999},

];

// var newArr = arrOfObj.filter(function(el){
//   return el.monthlySalary < 2000;
// })

var reducedArr = arrOfObj.reduce(function (comparator, el){
  return comparator + el.monthlySalary ;
}, 0);

console.log(reducedArr);
