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

//   db.collection("users").findOne(
//     { _id: new ObjectId("5f7bdd57f3e3d4fd4a2604f7") },
//     (err, result) => {
//       if (err) {
//         return console.log("not found");
//       } else {
//         console.log(result);
//       }
//     }
//   );

//   db.collection("users")
//     .find({ age: 24 })
//     .toArray((err, result) => {
//       if (err) {
//         return console.log("error");
//       } else {
//         console.log(result);
//       }
//     });

//   db.collection("users")
//     .find({ age: 24 })
//     .count((err, result) => {
//       if (err) {
//         return console.log("error");
//       } else {
//         console.log(result);
//       }
//     });

    db.collection("tasks").findOne(
        { _id: new ObjectId("5f7bdd57f3e3d4fd4a2604f9") },
        (err, result) => {
          if (err) {
            return console.log("not found");
          } else {
            console.log(result);
          }
        }
      );
    
      db.collection("tasks")
        .find({ completed: false })
        .toArray((err, result) => {
          if (err) {
            return console.log("error");
          } else {
            console.log(result);
          }
        });
    
});
