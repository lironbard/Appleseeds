const { MongoClient, ObjectID } = require("mongodb");

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

// const id = new ObjectID();
// console.log(id.id.length);
// console.log(id.toHexString().length);

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
  if (error) {
    return console.log("Unable to connect to database!");
  }

  const db = client.db(databaseName);

  db.collection("tasks").findOne({ _id: new ObjectID("607e0d302cef6346d84c9ce3") }, (error, tasks) => {
    console.log(tasks);
  });

  db.collection("tasks")
    .find({ completed: false })
    .toArray((error, tasks) => {
      console.log(tasks);
    });

  //   db.collection("users").findOne({ _id: new ObjectID("607e10f6617a661d202870ab") }, (error, user) => {
  //     if (error) {
  //       return console.log("Unable to fetch");
  //     }
  //     console.log(user);
  //   });

  //   db.collection("users")
  //     .find({ age: 27 })
  //     .toArray((error, users) => {
  //       console.log(users);
  //     });

  //   db.collection("users")
  //     .find({ age: 27 })
  //     .count((error, count) => {
  //       console.log(count);
  //     });

  //   db.collection("users").insertOne(
  //     {
  //       name: "Magunzi",
  //       age: 19,
  //     },
  //     (error, result) => {
  //       if (error) {
  //         return console.log("Unable to insert user");
  //       }

  //       console.log(result.ops);
  //     }
  //   );

  //   db.collection("users").insertMany(
  //     [
  //       {
  //         name: "Hilik",
  //         age: 65,
  //       },
  //       {
  //         name: "Patrick",
  //         age: 27,
  //       },
  //     ],
  //     (error, result) => {
  //       if (error) {
  //         return console.log("Unable to insert documents!");
  //       }
  //       console.log(result.ops);
  //     }
  //   );

  //   db.collection("tasks").insertMany(
  //     [
  //       {
  //         description: "Walk",
  //         completed: true,
  //       },
  //       {
  //         description: "Renew inspection",
  //         completed: false,
  //       },
  //       {
  //         description: "Plan",
  //         completed: false,
  //       },
  //     ],
  //     (error, result) => {
  //       if (error) {
  //         return console.log("Unable to insert tasks!");
  //       }
  //       console.log(result.ops);
  //     }
  //   );
});
