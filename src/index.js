const express = require("express");
require("./db/mongoose");
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");

const app = express();

const port = process.env.PORT || 3000;

//Example of middlewar function
// app.use((req, res, next) => {
//   if(req.method === 'GET'){
//     res.send('GET request are disabled')
//   } else {
//     next()
//   }
// });

// app.use((req, res, next)=>{
//   if(req.method){
//     res.status(503).send('Site is under going some changes')
//   } else {
//     next()
//   }
// })

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

//Without middleware: new request -> run route handler

//with middleware: new request -> do something(can create and target routes) -> run route handler

app.listen(port, () => {
  console.log("server is working");
});

// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");

// const myFunction = async() =>{
//   const password = "red12345"
//   const hashPassword = await bcrypt.hash(password, 8)

//   console.log(password)
//   console.log(hashPassword)

//   const isMatch = await bcrypt.compare('red12345', hashPassword)
//   console.log(isMatch)
// }

// myFunction()

//using jsonwebtoken
//trail will refector to ENV
// const JSONFunction = async () => {
//   //create
//   const token = jwt.sign({ _id: "123" }, "thisismysecret", { expiresIn: '0 seconds'});
//   console.log(token);
//   //checking
//   const data = jwt.verify(token, 'thisismysecret')
//   console.log(data)
// };

// JSONFunction();
