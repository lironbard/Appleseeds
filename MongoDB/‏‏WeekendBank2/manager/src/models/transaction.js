const mongoose = require("mongoose");
// const { ObjectId } = require("mongoose");

const Transaction = mongoose.model("Transaction", {
  amount: {
    type: Number,
    required: true,
  },
  transferringAccount: {
    type: Object,
    required: true,
  },
  receivingAccount: {
    type: Object,
    required: true,
  },
});

module.exports = Transaction;
