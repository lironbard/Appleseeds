const express = require("express");
require("./db/mongoose");
const app = express();
const cors = require("cors");
//const Account = require("./models/accounts");
const userRouter = require("./routers/user");
const accountRouter = require("./routers/account");
const transactionRouter = require("./routers/transactions");

const port = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());
app.use(userRouter);
app.use(accountRouter);
app.use(transactionRouter);

app.listen(port, () => {
  console.log("Server is up on port" + port);
});
