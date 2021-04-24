const { ObjectId } = require("mongoose");
const mongoose = require("mongoose");
//const validator = require("validator");

// const Account = mongoose.connect("mongodb://127.0.0.1:27017/bank-manager-api", {
//   useNewUrlParser: true,
//   useCreateIndex: true,
// });

//--== Creating Account Schema ==--\\

const Account = mongoose.model("accounts", {
  user_id: {
    type: ObjectId,
    required: true,
  },
  user_name: {
    type: String,
  },
  credit: {
    type: Number,
    default: 100,
    min: 0,
  },
  cash: {
    type: Number,
    default: 100,
    min: 0,
  },
});

//------------END--------------------\\

module.exports = Account;

//---------Creating Account----------\\
// const me = new Account({
//   isActive: true,
// });

// me.save()
//   .then(() => {
//     console.log(me);
//   })
//   .catch((error) => {
//     console.log("Error: ", error);
//   });

//------------END--------------------\\
