const Task = require('./models/task')
const User = require('./models/user')

const main = async () => {
  // const task = await Task.findById('5f8fe634db3fde1154d43257')
  // await task.populate('owner').execPopulate()
  // console.log(task.owner)

  const user = await User.findById('5f8fe5aaa0a9c610ead6aff6')
  await user.populate('tasks').execPopulate()
  console.log(user.tasks)

}

main()

//Without middleware: new request -> run route handler

//with middleware: new request -> do something(can create and target routes) -> run route handler

