require("./db/mongoose");
const User = require("./models/user");
const Account = require("./models/accounts");
const { ObjectID } = require("mongodb");

//--==addUser==--\
const createUser = (details) => {
  const user = new User({
    name: details.name,
    email: details.email,
  });

  const userAccount = new Account({
    user_id: user._id,
    user_name: user.name,
  });

  try {
    user.save().then(() => console.log("The user " + user + " has been created!"));
    userAccount.save().then(() => console.log("The account" + userAccount + "has been created!"));
  } catch (e) {
    throw new Error(e);
  }

  return { user, userAccount };
};

//--==updateCredit==--\\
const updateAccount = async (accountId, amount) => {
  const account = await Account.findById(accountId);

  // receivingUser.cash += amount;
  const updatedAccount = await Account.findByIdAndUpdate(account._id, { $inc: { cash: amount } }, { new: true });
  return updatedAccount;
};

//--==transferMoney==--\\
const makeTransition = async (transferringAccountId, receivingAccountId, amount) => {
  let transferringAccount = await Account.findById(transferringAccountId);
  let receivingAccount;

  // Looking for sufficient funds - Credit + Cash
  if (transferringAccount.cash > amount || transferringAccount.credit > Math.abs(transferringAccount.cash - amount)) {
    transferringAccount = await updateAccount(transferringAccountId, amount * -1);
    receivingAccount = await updateAccount(receivingAccountId, amount);
  } else {
    return "cash is too low to make that transfer";
  }

  return { transferringAccount, receivingAccount };
};

module.exports = { createUser, makeTransition, updateAccount };
