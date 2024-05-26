import http from "http";
import url from "url";

http
  .createServer((req, res) => {
    const request = url.parse(req.url, true);
    console.log(request);
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("hello!");
    res.end();
  })
  .listen(81);
