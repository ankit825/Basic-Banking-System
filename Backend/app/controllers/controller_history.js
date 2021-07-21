const db = require("../config/db.config.js");
const History = db.History;
exports.createHistory = (req, res) => {
  let history = {};

  try {
    // Building Customer object from upoading request's body
    history.sender_id = req.body.sender_id;
    history.sender_name = req.body.sender_name;
    history.receiver_id = req.body.receiver_id;
    history.receiver_name = req.body.receiver_name;
    history.amount = req.body.amount;
    history.status = req.body.status;

    // Save to MySQL database
    History.create(history, {
      attributes: [
        "id",
        "sender_id",
        "sender_name",
        "receiver_id",
        "receiver_name",
        "amount",
        "status",
      ],
    }).then((result) => {
      res.status(200).json(result);
    });
  } catch (error) {
    res.status(500).json({
      message: "Fail!",
      error: error.message,
    });
  }
};
exports.history = (req, res) => {
  // find all Customer information from
  try {
    History.findAll({
      attributes: [
        "id",
        "sender_id",
        "sender_name",
        "receiver_id",
        "receiver_name",
        "amount",
        "status",
      ],
    }).then((history) => {
      res.status(200).json(history);
    });
  } catch (error) {
    // log on console
    console.log(error);

    res.status(500).json({
      message: "Error!",
      error: error,
    });
  }
};
