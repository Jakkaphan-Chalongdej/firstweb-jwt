const express = require("express");
const next = require("next");
const bodyParser = require("body-parser");
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
const server = express();
const db = require("./components/config/db.config.js");
//force: true will drop the table if it already exists
db.sequelize.sync({ force: false }).then(() => {
  console.log("Drop and Resync with { force: true }");
});

app.prepare().then(() => {
  server.use(bodyParser.json());
  server.use(bodyParser.urlencoded({ extended: true }));
  server.get("/solution", (req, res) => {
    res.json({ message: "Welcome to bezkoder application." });
  });
  require("./components/route/customer.route.js")(server);
  /* server.get("/users", (req, res) => {
      let sql = "SELECT * FROM users"; 
      let query = db.query(sql, (err, results) => {
        if (err) throw err; 
        console.log(results); 
        res.json(results); 
      });
    });*/

  server.get("*", (req, res) => {
    return handle(req, res);
  });
  server.listen(3001, (err) => {
    if (err) throw err;
    console.log("   > Ready on listen >> Port : 3001 <    ");
    console.log("-----------------------------------------");
    console.log(" PLEASE VISIT >> http://localhost:3001 <<");
    console.log("_________________________________________");
  });
});
// .catch((ex) => {
//   console.error(ex.stack);
//   process.exit(1);
// });
