const { MongoClient, ObjectID } = require("mongodb");

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "blog";

// const id = new ObjectID();
// console.log(id.id.length);
// console.log(id.toHexString().length);

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
  if (error) {
    return console.log("Unable to connect to database!");
  }

  const db = client.db(databaseName);

  db.collection("users").insertMany(
    [
      {
        name: "Hilik",
        age: 65,
        email: "hilik2k@walla.com",
        posts: [1],
        comments: [500],
      },
      {
        name: "Patrick",
        age: 27,
        email: "Patriosa@walla.com",
        posts: [2],
        comments: [600],
      },
    ],
    (error, result) => {
      if (error) {
        return console.log("Unable to insert documents!");
      }
      console.log(result.ops);
    }
  );

  db.collection("posts").insertMany([
    {
      post_id: 1,
      post_author_email: "hilik2k@walla.com",
      content: "Why we are looking at the sky",
      comments: [500, 700],
    },
    {
      post_id: 2,
      post_author_email: "Patriosa@walla.com",
      content: "The new Super-league is not cool!",
      comments: [600],
    },
  ]);

  db.collection("comments").insertMany([
    {
      comment_id: 500,
      author_email: "hilik2k@walla.com",
      content: "This is my post!!",
    },
    {
      comment_id: 600,
      author_email: "Patriosa@walla.com",
      content: "My post is the best!",
    },
    {
      comment_id: 700,
      author_email: "Patriosa@walla.com",
      content: "Cool post Hilik!!!!!!!",
    },
  ]);

  //   db.collection("tasks").findOne({ _id: new ObjectID("607e0d302cef6346d84c9ce3") }, (error, tasks) => {
  //     console.log(tasks);
  //   });

  //   db.collection("tasks")
  //     .find({ completed: false })
  //     .toArray((error, tasks) => {
  //       console.log(tasks);
  //     });

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
