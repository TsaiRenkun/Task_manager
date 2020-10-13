require('../src/db/mongoose')
const User = require('../src/models/user')


//5f7c12d366cf1b0c83824d9d

User.findByIdAndUpdate('5f7c0bd67bb177097d404174', {age : 1}).then((user)=>{
    console.log(user)
    return User.countDocuments({age: 1})
}).then((result)=>{
    console.log(result)
}).catch((e)=>{
    console.log(e)
})
