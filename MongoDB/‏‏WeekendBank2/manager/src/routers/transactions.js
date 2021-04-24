const express = require("express");
const router = new express.Router();
const { transferMoney } = require("../utilities");
const Transaction = require("../models/transaction");

router.get("/transactions/", async (req, res) => {
  try {
    const transaction = await Transaction.find({});
    res.status(200).send(transaction);
  } catch (e) {
    res.status(400).send(e.message);
  }
});

router.get("/transactions/:id", async (req, res) => {
  try {
    const transaction = await Transaction.findById(req.params.id);
    res.status(200).send(transaction);
  } catch (e) {
    res.status(400).send(e.message);
  }
});

router.delete("/transactions/:id", async (req, res) => {
  try {
    const deletedTransaction = await Transaction.deleteOne({
      _id: req.params.id,
    });
    res.status(200).send(deletedTransaction);
  } catch (e) {
    res.status(400).send(e.message);
  }
});

router.post("/transactions/", async (req, res) => {
  try {
    const transaction = await transferMoney(req.body.transferringAccount, req.body.receivingAccount, req.body.amount);

    res.status(200).send(transition);
  } catch (e) {
    res.status(400).send(e.message);
  }
});

module.exports = router;
