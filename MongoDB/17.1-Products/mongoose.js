const mongoose = require("mongoose");
const validator = require("validator");

mongoose.connect("mongodb://127.0.0.1:27017/task-manager-api", {
  useNewUrlParser: true,
  useCreateIndex: true,
});

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
  password: {
    type: String,
    required: true,
    minlength: 7,
    trim: true,
    validate(value) {
      if (value.toLowerCase().includes("password")) {
        throw new Error('Password cannot contain "password"');
      }
    },
  },
  age: {
    type: Number,
    default: 0,
    validate(value) {
      if (value < 0) {
        throw new Error("Age must be a pos number!");
      }
    },
  },
});

//----------Creating User type----------\\
// const me = new User({
//   name: "      Babushka",
//   email: "My@EMAIL.CO    ",
//   password: "phone123!",
// });

// me.save()
//   .then(() => {
//     console.log(me);
//   })
//   .catch((error) => {
//     console.log("Error: ", error);
//   });

//----Creating task collection------\\
const Task = mongoose.model("Task", {
  description: {
    type: String,
    required: true,
    trim: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

const Product = mongoose.model("Product", {
  name: {
    type: String,
    required: true,
    trim: true,
  },
  category: {
    type: String,
    required: true,
  },
  isActive: {
    type: Boolean,
  },
  details: {
    description: {
      type: String,
      required: true,
      minlength: 10,
    },
    price: {
      type: Number,
      validate(value) {
        if (value < 0) {
          throw new Error("Price must be a pos number!");
        }
      },
      discount: {
        type: Number,
        default: 0,
      },
      images: [String],
    },
    phone: {
      type: String,
      required: true,
      Phone: 10,
      validate(value) {
        console.log(`hello ${value}`);
        if (!validator.isMobilePhone(value, "he-IL")) {
          throw new Error("mobile phone is not valid");
        }
      },
    },
    DateAdded: {
      type: Date,
      //   validator(value) {
      //     if (!validator.isDate(value)) {
      //       throw new Error("Date not valid!");
      //     }
      //   },
    },
  },
});

const product = new Product({
  name: "Babush",
  category: "sport",
  isActive: true,
  details: {
    description: "Cool Adidas Ball",
    price: 15,
    discount: 1,
    image: ["ball1.jpg", "ball2.jpg"],
    phone: "0508256555",
    DateAdded: new Date(),
  },
});

product
  .save()
  .then(() => {
    console.log(product);
  })
  .catch((error) => {
    console.log("Error: ", error);
  });
// const Details = mongoose.model("Details", {
//   description: {
//     type: String,
//     required: true,
//     minlength: 10,
//   },
//   discount: {
//     type: Number,
//     default: 0,
//   },
// });

//----Creating new task------\\
// const task = new Task({
//   description: "    Walk",
//   completed: false,
// });

// task
//   .save()
//   .then(() => {
//     console.log(task);
//   })
//   .catch((error) => {
//     console.log("Error: ", error);
//   });
