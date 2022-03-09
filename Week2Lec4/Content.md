### 1. Ecmascript
- The Problem (Safari, Chrome, Firefox, Opera etc.)
- Why we needed it ?
- https://en.wikipedia.org/wiki/ECMAScript

### 2. Constructor Functions
```js
// constructor function
function Person () {
  this.name = 'John',
      this.age = 23,

      this.greet = function () {
        console.log('hello');
      }
}



// create objects
const person1 = new Person();
const person2 = new Person();
```

### 3. Inheritence using contructor function
```js
function Employee(name, age, gender, id) {
            this.name = name;
            this.age = age;
            this.gender = gender;
            this.id = id;
        };
  
        function Developer(name, age, gender, id, 
        specialization) {
  
            // Calling Employee constructor function
            Employee.call(this, name, age, gender, id);
  
            // Adding a new parameter
            this.specialization = specialization;
        }
        console.log(Employee.prototype);
        console.log(Developer.prototype);
```
### 4. ES6 Concepts
- #### Const, Let and Var

```js
  var greeter = "hey hi";
    var times = 4;

    if (times > 3) {
        var greeter = "say Hello instead"; 
    }
    
    console.log(greeter)
```

```js
var a = 10
var a = 20;
console.log(a);
```

```js
 let greeting = "say Hi";
greeting = "say Hello instead";
```

```js
let greeting = "say Hi";
let greeting = "say Hello instead";
```

```js
console.log(a);
```

```js
console.log(a);
var a = 20;
```

```js
  let greeting = "say Hi";
    if (true) {
        let greeting = "say Hello instead";
        console.log(greeting); // "say Hello instead"
    }
    console.log(greeting); // "say Hi"
```

- #### Classes and Constructors
- #### Arrow Functions
- #### Modules in HTML Script tag
- #### Vue Js using HTML module
- #### Vue Js using CLI
