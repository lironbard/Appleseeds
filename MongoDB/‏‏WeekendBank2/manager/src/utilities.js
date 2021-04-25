require("./db/mongoose");
const User = require("./models/user");
const Account = require("./models/accounts");
const Transaction = require("./models/transaction");
const { ObjectID } = require("mongodb");

//--==addUser==--\
const createUser = (details) => {
  const user = new User({
    name: details.name,
    email: details.email,
    passport_id: details.passport_id,
  });

  const userAccount = new Account({
    user_id: user._id,
    user_name: user.name,
  });

  try {
    user.save().then(() => console.log("The user " + user + " has been created!"));
    userAccount.save().then(() => console.log("The account" + userAccount + "has been created!"));
    return { user, userAccount };
  } catch (e) {
    throw new Error(e);
  }
};

//--==updateCredit==--\\
const updateAccount = async (accountId, amount) => {
  const account = await Account.findOne({ user_id: accountId });

  if (!account) {
    throw new Error("No account found");
  }

  // receivingUser.cash += amount;
  const updatedAccount = await Account.findByIdAndUpdate(account._id, { $inc: { cash: amount } }, { new: true });
  return updatedAccount;
};

//--==transferMoney==--\\
const transferMoney = async (transferringAccountId, receivingAccountId, amount) => {
  let transferringAccount = await Account.findOne({ user_id: transferringAccountId });
  let receivingAccount;

  if (!transferringAccount) {
    throw new Error("No account found");
  }

  // Looking for sufficient funds - Credit + Cash
  if (transferringAccount.cash > amount || transferringAccount.credit > Math.abs(transferringAccount.cash - amount)) {
    transferringAccount = await updateAccount(transferringAccountId, amount * -1);
    receivingAccount = await updateAccount(receivingAccountId, amount);

    transaction = new Transaction({
      amount,
      transferringAccount: transferringAccount,
      receivingAccount: receivingAccount,
    });

    await transaction.save();
  } else {
    return "cash is too low to make that transfer";
  }

  return { transferringAccount, receivingAccount, transaction };
};

module.exports = { createUser, transferMoney, updateAccount };
