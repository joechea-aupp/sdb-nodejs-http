import http from "http";

http
  .createServer((_, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("hello!");
    res.end();
  })
  .listen(81);
