var http = require("http");


var PORT = 7000;
var PORT2 = 7500;


function positiveRequest(request, response) {
    response.end("You are Beautiful! " + request.url);
}

function negativeRequest(request, response) {
    response.end("You are Ugly! " + request.url);
}


var server = http.createServer(positiveRequest);
var server2 = http.createServer(negativeRequest)


server.listen(PORT, function () {
    console.log("Server listening on: http://localhost:" + PORT);
});

server2.listen(PORT2, function () {
    console.log("Server listening on: http://localhost:" + PORT2);
});
