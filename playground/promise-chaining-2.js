require('../src/db/mongoose');

const Task = require('../src/models/task');


Task.findByIdAndDelete('5f7c21669575310f239aef86').then((task)=>{
    console.log(task)
    return Task.countDocuments({completed: false})
}).then((result)=>{
    console.log(result)
}).catch((e)=>{
    console.log(e)
})



