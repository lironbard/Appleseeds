const express = require("express");
const app = express();
const { getUsers, getUser, addUser, deposit, updateCredit, withdrawMoney, transferMoney } = require("./utils");

app.use(express.json());
//---------------------------\\
app.use("/", (req, res, next) => {
  console.log(`url : ${req.url}`);
  next();
});
//---------------------------\\

//-----------Show all users------\\
app.get("/api/users", (req, res) => {
  try {
    res.status(200).json(getUsers());
  } catch (e) {
    res.status(400).send({ error: e.message });
  }
});
//----------END----------------\\

//-----------Show specific users------\\
app.get("/api/users/:id", (req, res) => {
  try {
    getUser(req.params.id);
    res.status(200).send(user);
  } catch (e) {
    res.status(400).send({ error: e.message });
  }
});
//----------END----------------\\

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Connected to " + PORT);
});
