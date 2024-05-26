import http from "http";
import url from "url";

let users = [];

http
  .createServer((req, res) => {
    if (req.method === "POST") {
      let body = "";
      req.on("data", (data) => {
        body += data;
      });

      req.on("end", () => {
        body = JSON.parse(body);

        if (users.find((user) => user.username === body.username)) {
          res.write("user already exists");
        } else {
          users.push({ ...body });
          res.write("user created");
        }
        console.log(users);
      });
    } else if (req.method === "GET") {
      const parse = url.parse(req.url, true);
      console.log(parse.query);
    } else if (req.method === "PUT") {
      let body = "";
      req.on("data", (data) => {
        body += data;
      });
      req.on("end", () => {
        body = JSON.parse(body);
        const index = users.findIndex(
          (user) => user.username === body.username,
        );
        if (index !== -1) {
          users[index] = { ...body };
          res.write("user updated");
        }
        console.log(users);
      });
    } else if (req.method === "DELETE") {
      let body = "";
      req.on("data", (data) => {
        body += data;
      });
      req.on("end", () => {
        body = JSON.parse(body);
        users = users.filter((user) => user.username !== body.username);

        console.log(users);
      });
    }

    res.end();
  })
  .listen(81);
