const express = require("express");
const router = new express.Router();
const { createUser } = require("../utilities");
const User = require("../models/user");

// //------===Get all the users===------\\
router.get("/users/", async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).send(users);
  } catch (e) {
    res.status(400).send(e.message);
  }
});
// //------===Get a specific user===------\\
router.get("/users/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).send(user);
  } catch (e) {
    res.status(400).send(e.message);
  }
});

// //------==Creating a user==------\\
router.post("/users/", async (req, res) => {
  try {
    const { user, userAccount } = await createUser(req.body);
    res.status(200).send({ user, userAccount });
  } catch (e) {
    res.status(400).send(e.message);
  }
});
// //------===Deleting a specific user===------\\
router.delete("/users/:id", async (req, res) => {
  try {
    const userDeleted = await User.deleteOne({ _id: req.params.id });
    res.status(200).send(userDeleted);
  } catch (e) {
    console.log(e);
    res.status(400).send(e.message);
  }
});

module.exports = router;

// const express = require("express");
// const User = require("../models/user");
// const router = new express.Router();

// //------==Creating a user==------\\
// router.post("/users", async (req, res) => {
//   const user = new User(req.body);

//   try {
//     await user.save();
//     res.send(201).send(user);
//   } catch (e) {
//     res.status(400).send();
//   }
// });

// //------===Get all the users===------\\
// router.get("/users", async (req, res) => {
//   try {
//     const users = await User.find({});
//     res.send(users);
//   } catch (e) {
//     res.status(500).send();
//   }
// });

// //------===Get a specific user===------\\
// router.get("/users/:id", async (req, res) => {
//   const _id = req.params.id;

//   try {
//     const user = await User.findById(_id);
//     if (!user) {
//       return res.status(404).send();
//     }
//     res.send(user);
//   } catch (e) {
//     res.status(500).send();
//   }
// });

// //------===Updating a specific user===------\\

// router.patch("/users/:id", async (req, res) => {
//   const updates = Object.keys(req.body);
//   const allowedUpdates = ["name", "email"];
//   const isValidOperation = updates.every((update) => {
//     return allowedUpdates.includes(update);

//     if (!isValidOperation) {
//       return res.status(400).send({ error: "Invalid updates!" });
//     }
//   });
//   try {
//     const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
//     if (!user) {
//       return res.status(404).send();
//     }

//     res.send(user);
//   } catch (e) {
//     res.status(400).send(e);
//   }
// });

// //------===Deleting a specific user===------\\
// router.delete("/users/:id", async (req, res) => {
//   try {
//     const user = await User.findByIdAndDelete(req.params.id);
//     if (!user) {
//       return res.status(404).send();
//     }
//     res.send(user);
//   } catch (e) {
//     res.status(500).send();
//   }
// });

// module.exports = router;
