import https from "https";
import fs from "fs";

const options = {
  key: fs.readFileSync("./https_keys/private.pem"),
  cert: fs.readFileSync("./https_keys/certificate.pem"),
};

https
  .createServer(options, (req, res) => {
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
  .listen(8080);
