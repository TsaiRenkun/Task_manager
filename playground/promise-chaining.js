require("../src/db/mongoose");
const User = require("../src/models/user");

//5f7c12d366cf1b0c83824d9d

// User.findByIdAndUpdate("5f7c0bd67bb177097d404174", { age: 1 })
//   .then((user) => {
//     console.log(user);
//     return User.countDocuments({ age: 1 });
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

const updateAgeAndCount = async (id, age) => {
  const user = await User.findByIdAndUpdate(id, { age });
  const count = await User.countDocuments({ age });
  return count
};

updateAgeAndCount('5f7c12d366cf1b0c83824d9d', 2).then((count)=>{
    console.log(count)
}).catch((e)=>{
    console.log(e)
})

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