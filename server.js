var http = require("http")

http
  .createServer(function(request, response) {
    request.pipe(response)
  })
  .listen(8020, "127.0.0.1")

console.log("Listening on port 8020...")
