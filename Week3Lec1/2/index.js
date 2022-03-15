// console.log("Hello")

// NodeJs provides a special variable process
// console.log(process);

// Access CLI arguments
// console.log(process.argv);

// npm start "path_of_file" compress
// npm start "path_of_file" uncompress
// console.log(process.argv[2]);
// console.log(process.argv[3]);

// Let's Try to make it easier for user to know what arguments mean
// npm start path="path_of_file" mode=uncompress
// console.log(process.argv[2]); // ====> This will output 'path=path_of_file'
// const unScrubbedArgumentPath = process.argv[2]
// const scrubbedArgumentPath = unScrubbedArgumentPath.split("=")//
// console.log("Path is "+scrubbedArgumentPath[1]); // ====> This will output 'path_of_file'
//
// console.log(process.argv[3]); // ====> This will output 'mode=uncompress'
// const unScrubbedArgumentMode = process.argv[3]
// const scrubbedArgumentMode = unScrubbedArgumentMode.split("=")//
// console.log("Mode is "+scrubbedArgumentMode[1]); //  ====> This will output 'uncompress'

// Let's Try to allow user to pass arguments in any order
// node index.js -mode=uncompress  -path=path_of_file

// The Solution is to use an NPM package
// do npm install minimist

var minimist = require('minimist');
const parsedArguments = minimist(process.argv);
console.log(parsedArguments.m)
console.log(parsedArguments.p)
