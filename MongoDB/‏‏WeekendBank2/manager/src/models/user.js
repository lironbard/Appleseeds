const mongoose = require("mongoose");
const validator = require("validator");

//--== Creating User Schema ==--\\

const User = mongoose.model("User", {
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Email is invalid!");
      }
    },
  },
  passport_id: {
    type: Number,
    required: true,
  },
});

module.exports = User;

//------------END--------------------\\

//---------Creating User----------\\
// const me = new User({
//   name: "Raphael",
//   email: "raphael@gmail.com",
// });

// me.save()
//   .then(() => {
//     console.log(me);
//   })
//   .catch((error) => {
//     console.log("Error: ", error);
//   });

//------------END--------------------\\
