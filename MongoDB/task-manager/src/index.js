const express = require("express");
require("./db/mongoose");
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");
const { request } = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

// app.use((req, res, next) => {
//   if (req.method === "GET") {
//     res.send("GET requests are disabled");
//   } else {
//     next();
//   }
// });

// app.use((req, res, next) => {
//   res.status(503).send("site is currently down. check back later");
// });

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(PORT, () => {
  console.log("Server is up on port " + PORT);
});

// const jwt = require("jsonwebtoken");

// const myFunction = async () => {
//   const token = jwt.sign({ _id: "abc123" }, "thisis", { expiresIn: "100 years" });
//   console.log(token);

//   const data = jwt.verify(token, "thisis");
//   console.log(data);
// };

// myFunction();

const Task = require("./models/task");
const User = require("./models/user");

const main = async () => {
  // const task = await Task.findById(""); // need task ID
  // await task.populate("owner").execPopulate();
  // console.log(task.owner);
  //
  // const user = await User.findById(""); // need task ID
  // await user.populate("tasks").execPopulate();
  // console.log(user.tasks);
};

main();
