//CRUD create read update delete

const mongodb = require("mongodb");

const { MongoClient, ObjectId } = require("mongodb");

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (err, client) => {
  if (err) {
    return console.log("Unable to connect to database!");
  }

  const db = client.db(databaseName);

//   db.collection('users').deleteMany({
//       age:24
//   }).then((result)=>{
//       console.log(result)
//   }).then((error)=>{
//     console.log(error)
//   })

  db.collection('tasks').deleteOne({
      description: "Feed dog"
  }).then((result)=>{
      console.log(result)
  }).then((error)=>{
      console.log(error)
  })
});
