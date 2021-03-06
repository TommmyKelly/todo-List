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

app.listen(port, console.log(`Listening on port ${port}`.yellow.bold));
