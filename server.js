const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const app = express();
const todo = require("./routes/Todo");
const users = require("./routes/Users");
const connectDB = require("./config/db");

dotenv.config();

app.use(express.json());

connectDB();

app.use("/api/todos", todo);
app.use("/api/users", users);

const port = process.env.PORT || 5000;

const server = app.listen(
  port,
  console.log(`Listening on port ${port}`.yellow.bold)
);

process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}`.red);
  //Close server and exit process
  server.close(() => process.exit(1));
});
