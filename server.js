const express = require("express");
const dotenv = require("dotenv");
const app = express();
const todo = require("./routes/Todo");

dotenv.config();

app.use("/api/todos", todo);

const port = process.env.PORT || 5000;

app.listen(port, console.log(`Listening on port ${port}`));
