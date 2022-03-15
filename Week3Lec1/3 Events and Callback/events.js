// var events = require("events");
//
// var eventEmitter = new events.EventEmitter();
//
// function handleBellRing(){
//   console.log("Bell Jusst Rang, Please Run");
// }
//
// eventEmitter.on("ringBell", handleBellRing);
//
// eventEmitter.emit("ringBell");

var fs = require("fs");
var events = require("events");

var eventEmitter = new events.EventEmitter();

function handleSuccess(){
  console.log("READ SUCCESS");
}

eventEmitter.on("fileReadSuccess",handleSuccess);

fs.readFile("./test.txt", function (){
  eventEmitter.emit("fileReadSuccess")
});
