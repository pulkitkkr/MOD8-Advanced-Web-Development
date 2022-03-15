var minimist = require('minimist');
var fs = require('fs');
var events = require('events');
var compressor = require('node-gzip');

const eventEmitter = new events.EventEmitter();

const SUCCESS_READ = "SUCCESS_READ";

// node index.js -mode=uncompress  -path=./test.txt -outputPath=./test.zip
const parsedCLIArguments = minimist(process.argv);
const mode = parsedCLIArguments.m;
const path = parsedCLIArguments.p;
const outputPath = parsedCLIArguments.o;

eventEmitter.on("COMPRESS", function(data){
  const compressedData = compressor.gzip(data)

  compressedData.then(function(data){
    fs.writeFileSync(outputPath, data.toString());
  })
});

eventEmitter.on("UNCOMPRESS", function() {

  const zipContent = fs.readFile(path, function (err, data){
    const unCompressedData = compressor.ungzip(data)
    console.log(unCompressedData);

  });
});


switch(mode.toUpperCase()) {
  case "UNCOMPRESS":
    eventEmitter.emit("UNCOMPRESS");
    break;
  case "COMPRESS":
    fs.readFile(path, function (err,data) {
      if(err){
        console.log("Error Reading file =>"+err);
      } else {
        eventEmitter.emit("COMPRESS", data.toString());
      }
    });
    break;
  default:
    console.log("Mode can only be compress and uncompress")
}



