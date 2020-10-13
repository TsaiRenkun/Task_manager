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
