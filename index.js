const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("hello wrold from the express");
});

app.get("/about", (req, res) => {
  res.send("hello wrold from About page ");
});

app.listen(8000, () => {
  console.log("App is running at port 8000");
});

//The callback function has 2 parameter, request(req) and response(res)
//the request object(req) represents the HTTP request and
//has properties fpr the request query string,parameters,body,
//HTTP headers,etc.

//Similarly the response object represent the HTTP response
//That the express app sends when it receives an HTTP request.
