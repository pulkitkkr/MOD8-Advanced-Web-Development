// var myRootElement = document.getElementById("root");
// var myHeadings = ["Heading-1", "Heading-2", "Heading-3", "Heading-4"];
// var myParagraph = ["pppppppppppppppppppppppppppppppp", "222222", "333" ,"444"]
// var previousInnerHtml;
//
// for(var i in myHeadings){
//   var heading = document.createElement("h1");
//   heading.innerText = myHeadings[i]; // <h1>...heading...</h1>
//
//   var paragraph = document.createElement("p");
//   paragraph.innerText = myParagraph[i]; // <p>...para...</p>
//
//   var myDiv = document.createElement("div");
//   myDiv.appendChild(heading) // <div><h1>...heading...</h1></div>>
//   myDiv.appendChild(paragraph) // <div><h1>...heading...</h1> <p>...para.... </p></div>>
//
//   myRootElement.appendChild(myDiv);
// }

var multiplication = function (a, b) {
  return a*b;
}

var addition = function (a, b) {
  return a+b;
}

var operate = function (a,b, func) {
  return func(a,b);
};

document.write(operate(10,20, multiplication));



