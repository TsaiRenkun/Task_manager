const express = require("express");
require("./db/mongoose");
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");

const app = express();

const port = process.env.PORT || 3000;



app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

//Without middleware: new request -> run route handler

//with middleware: new request -> do something(can create and target routes) -> run route handler

app.listen(port, () => {
  console.log("server is working");
});

