const express = require('express');
const app = express.Router();
const controller = require("../controllers/customer.controller");

app.get("/", controller.get);
app.get("/:id", controller.getById);
app.get("/name/:name", controller.getbyname);
app.post("/", controller.create);
app.put("/:id", controller.puts);
app.patch("/:id", controller.patchs);
app.delete("/:id", controller.delete);
module.exports = app;