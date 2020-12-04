const express = require("express");
const next = require("next");
const bodyParser = require("body-parser");
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
const server = express();
const PORT = process.env.PORT || 3001;
const cors = require("cors");
const db = require("./components/model");

const Role = db.role;
var corsOptions = {
  origin: "http://localhost:3001",
};
//force: true will drop the table if it already exists
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and Resync with { force: true }");
//   initial();
// });
db.sequelize.sync();
function initial() {
  Role.create({
    id: 1,
    name: "user",
  });

  Role.create({
    id: 2,
    name: "moderator",
  });

  Role.create({
    id: 3,
    name: "admin",
  });
}
app.prepare().then(() => {
  server.use(bodyParser.json());
  server.use(bodyParser.urlencoded({ extended: true }));
  server.get("/solution", (req, res) => {
    res.json({ message: "Welcome to bezkoder application." });
  });
  server.use(cors(corsOptions));
  require("./components/route/auth.routes")(server);
  require("./components/route/user.route")(server);

  server.get("*", (req, res) => {
    return handle(req, res);
  });
  server.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`  > Ready on listen >> Port : ${PORT} <    `);
    console.log("-----------------------------------------");
    console.log(` PLEASE VISIT >> http://localhost:${PORT} <<`);
    console.log("_________________________________________");
  });
});
// .catch((ex) => {
//   console.error(ex.stack);
//   process.exit(1);
// });
