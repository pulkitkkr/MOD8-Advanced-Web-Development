var http = require('http');
var url = require('url');


function serverHandler(request, response){
  const parsedUrl = url.parse(request.url);
  const pathname = parsedUrl.pathname; // '/hello'
  const pathNameWithoutSlash = pathname.split("/")[1];

  switch (pathNameWithoutSlash){
    case "hello":
      response.write("Hello");
      break;
    case "bye":
      response.write("Bye");
      break;
    default:
      response.write("Error 404");
      break;
  }

  response.end();
}

http.createServer(serverHandler).listen(8081);
