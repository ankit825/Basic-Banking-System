const express = require("express");
const app = express();

var bodyParser = require("body-parser");

const db = require("./app/config/db.config.js");
const Customer = db.Customer;
const History = db.History;

// force: true will drop the table if it already exists
db.sequelize.sync().then(() => {
  console.log("Drop and Resync with { force: true }");
  Customer.sync().then(() => {});
  History.sync().then(() => {});
});

let router = require("./app/routers/router.js");
const cors = require("cors");
const corsOptions = {
  //origin: "https://ankitbanking.herokuapp.com",
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use("/", router);

// Create a Server
const server = app.listen(process.env.PORT || 3001, function () {
  let host = server.address().address;
  let port = server.address().port;

  console.log("App listening at http://%s:%s", host, port);
});
