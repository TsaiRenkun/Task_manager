require('../src/db/mongoose');

const Task = require('../src/models/task');


// Task.findByIdAndDelete('5f7c21669575310f239aef86').then((task)=>{
//     console.log(task)
//     return Task.countDocuments({completed: false})
// }).then((result)=>{
//     console.log(result)
// }).catch((e)=>{
//     console.log(e)
// })


const deleteTaskAndCount = async(id, completed) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({completed})
    return count
}


deleteTaskAndCount('5f85832a7da03f32b6139e9a', false).then((count)=>{
    console.log(count)
}).catch((e)=>{
    console.log(e)
})

