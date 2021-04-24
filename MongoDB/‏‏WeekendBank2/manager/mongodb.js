// const mongodb = require("mongodb");
// const MongoClient = mongodb.MongoClient;
// const ObjectID = mongodb.ObjectID;

const { MongoClient, ObjectID } = require("mongodb");

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "bank-manager";

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
  if (error) {
    return console.log("Unable to connect to database!");
  }
  //---==DATABASE==---\\

  const db = client.db(databaseName);

  //---==Users commands==---\\

  //---Getting single User---\\
  db.collection("users").findOne({ _id: new ObjectID("6083e926e19a132bb0f5fece") }, (error, user) => {
    if (error) {
      return console.log("Unable to fetch");
    }
    console.log(user);
  });
  //-----------END-----------\\
  //
  //-------Inserting one user at a time-----\\
  //   db.collection("users").insertOne(
  //     {
  //       passport_id: 2,
  //       name: "Donatelo",
  //       email: "Donatelo@gmail.com",
  //       cash: 100,
  //       credit: 100,
  //       isActive: true,
  //     },
  //     (error, result) => {
  //       if (error) {
  //         return console.log("Unable to insert documents!");
  //       }
  //       console.log(result.ops); // printing in the terminal the new user added.
  //     }
  //   );
  //-----------END-----------\\
  //
  //---Updating single User---\\
  db.collection("users")
    .updateOne(
      { _id: new ObjectID("6083e926e19a132bb0f5fece") },
      {
        $set: {
          credit: 101,
        },
      }
    )
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });
  //-----------END-----------\\
  //
  //-------Inserting more than one user at once-----\\

  //   db.collection("users").insertMany(
  //     [
  //       {
  //         passport_id: 3,
  //         name: "Raphael",
  //         email: "Raphael@gmail.com",
  //         cash: 100,
  //         credit: 100,
  //         isActive: true,
  //       },
  //       {
  //         passport_id: 4,
  //         name: "Michael",
  //         email: "Michael@gmail.com",
  //         cash: 100,
  //         credit: 100,
  //         isActive: true,
  //       },
  //     ],
  //     (error, result) => {
  //       if (error) {
  //         return console.log("Unable to insert documents!");
  //       }
  //       console.log(result.ops); // printing in the terminal the new user added.
  //     }
  //   );

  //-----------END-----------\\

  //---==Accounts commands==---\\ NOT DEPLOYED!

  //   db.collection("bank_accounts").insertOne({
  //     user_id: "6083e926e19a132bb0f5fece",
  //     cash: 100,
  //     credit: 100,
  //     isActive: true,
  //   });
  //-----------END-----------\\
});
