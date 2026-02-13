const http = require('http');

const server = http.createServer((req, res) => {
  res.end("Node CI/CD running");
});

server.listen(3000, () =>
  console.log("Server running on port 6000")
);
// poll scm fix test
