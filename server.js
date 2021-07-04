const express = require("express");
const server = express();
const helmet = require("helmet");
const morgan = require("morgan");

const dishRoutes = require("./routes/dishRoutes");
const recipeRoutes = require("./routes/recipeRoutes");

server.use(express.json());
server.use(helmet());
server.use(morgan("dev"));

server.use("/api/dishes", dishRoutes);
server.use("/api/recipes", recipeRoutes);

server.get("/api", (req, res) => {
  res.send("Server works.");
});

module.exports = server;
