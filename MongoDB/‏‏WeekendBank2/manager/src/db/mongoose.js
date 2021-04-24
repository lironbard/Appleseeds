const mongoose = require("mongoose");

//--== Connecting to the Data Base ==--\\
mongoose.connect("mongodb://127.0.0.1:27017/bank-manager-api", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});
