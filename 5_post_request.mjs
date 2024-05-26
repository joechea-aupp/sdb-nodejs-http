import http from "http";

http
  .createServer((req, res) => {
    if (req.method === "GET") {
      res.write("GET request received");
    } else {
      let body = "";
      req.on("data", (data) => {
        body += data;
      });

      req.on("end", () => {
        body = JSON.parse(body);
        console.log(body);
      });

      req.on("error", (err) => {
        console.log(err);
      });
    }
    res.end();
  })
  .listen(81);
