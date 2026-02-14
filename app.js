const http = require('http');

const server = http.createServer((req, res) => {
  res.end("Node CI/CD running");
});

server.listen(3000, () =>
  console.log("Server running on port 5000")
);

//new  update
