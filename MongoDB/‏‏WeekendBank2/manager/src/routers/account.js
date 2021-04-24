const express = require("express");
const router = new express.Router();
const Account = require("../models/accounts");

//---==Get all accounts==--\\
router.get("/accounts/", async (req, res) => {
  try {
    const accounts = await Account.find({});
    res.status(200).send(accounts);
  } catch (e) {
    res.status(400).send(e.message);
  }
});

//---==Get a specific account==--\\
router.get("/accounts/:id", async (req, res) => {
  try {
    const account = await Account.findById(req.params.id);
    res.status(200).send(account);
  } catch (e) {
    res.status(400).send(e.message);
  }
});
//---==Delete a specific account==--\\
router.delete("/accounts/:id", async (req, res) => {
  try {
    const deletedAccount = await Account.deleteOne({ _id: req.params.id });
    res.status(200).send(deletedAccount);
  } catch (e) {
    console.log(e);
    res.status(400).send(e.message);
  }
});

module.exports = router;
