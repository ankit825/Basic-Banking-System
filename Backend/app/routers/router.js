
let express = require('express');
let router = express.Router();
 
const customers = require('../controllers/controller.js');
const History = require("../controllers/controller_history.js");

router.post("/api/customer", customers.createCustomer);
router.get("/api/customer/:id", customers.getCustomer);
router.get("/api/customers", customers.customers);
router.put("/api/customer", customers.updateCustomer);
router.delete("/api/customer/:id", customers.deleteCustomer);
router.post("/api/history", History.createHistory);
router.get("/api/histories", History.history);
module.exports = router;