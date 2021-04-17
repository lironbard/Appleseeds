const fs = require("fs");

//---Getting/Loading all Users---\\
const getUsers = () => {
  let users = loadUsers();
  return users;
};
//-----------END-----------\\

//---Loading all users---\\
const loadUsers = () => {
  try {
    const dataBuffer = fs.readFileSync(__dirname + "/users.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    throw new Error("Loading users failed");
  }
};
//-----------END-----------\\

//---Getting single User---\\
const getUser = (id) => {
  let users = loadUsers();
  const user = users.find((el) => el.passport_id === id);
  if (user) return user;
  throw new Error("User not found");
};
//-----------END-----------\\

//---Adding a User---\\
const addUser = (user) => {
  let users = loadUsers();

  if (users.find((el) => el.passport_id === user.passport_id)) {
    throw new Error("Passport ID already exist!!");
  }

  user.credit = Number(user.credit);
  if (Number.isNaN(user.credit) || user.credit < 0) {
    throw new Error("Credit needs to be a positive number or exactly 0");
  }

  user.cash = Number(user.cash);
  if (Number.isNaN(user.cash) || user.cash < -user.credit) {
    throw new Error("Cash cant be lower than your credit");
  }

  users.push(user);
  saveUsers(users);
};
//-----------END-----------\\

//---Deposit cash to a User---\\
const deposit = (id, { amount }) => {
  const users = loadUsers();
  let user = users.find((el) => el.passport_id === id);
  if (!user) throw new Error("User not found");
  amount = Number(amount);
  if (Number.isNaN(amount) || amount <= 0) {
    throw new Error("Amount needs to be a positive number");
  }
  user.cash += amount;
  saveUsers(users);
};
//-----------END-----------\\

//---Update e users credit---\\
const updateCredit = (id, { credit }) => {
  const users = loadUsers();
  let user = users.find((el) => el.passport_id === id);
  if (!user) throw new Error("User not found");
  user.credit = credit;
  saveUsers(users);
};
const saveUsers = (users) => {
  try {
    fs.writeFileSync(__dirname + "/users.json", JSON.stringify(users));
  } catch (e) {
    throw new Error(e.message);
  }
};
//-----------END-----------\\

//---Withdraw money from the user with cash---\\
const withdrawMoney = (id, { amount }) => {
  const users = loadUsers();
  let user = users.find((el) => el.passport_id === id);
  if (!user) throw new Error("User not found");
  amount = Number(amount);
  if (Number.isNaN(amount) || amount <= 0) {
    throw new Error("Amount needs to be a positive number");
  }

  if (user.cash - amount < -user.credit) {
    throw new Error("Cash cant be lower than your credit");
  }
  user.cash -= amount;

  saveUsers(users);
};
//-----------END-----------\\

//---Transferring money from one usr to another---\\
const transferMoney = (sending, receiving, { amount }) => {
  const users = loadUsers();
  let sendingUser = users.find((el) => el.passport_id === sending);
  if (!sendingUser) throw new Error("User not found");
  amount = Number(amount);
  if (Number.isNaN(amount) || amount <= 0) {
    throw new Error("Amount needs to be a positive number");
  }

  if (sendingUser.cash - amount < -sendingUser.credit) {
    throw new Error("Cash cant be lower than your credit");
  }
  sendingUser.cash -= amount;

  //----\\

  let receivingUser = users.find((el) => el.passport_id === receiving);
  if (!receivingUser) throw new Error("User not found");
  amount = Number(amount);
  if (Number.isNaN(amount) || amount <= 0) {
    throw new Error("Amount needs to be a positive number");
  }
  receivingUser.cash += amount;

  saveUsers(users);
};

//-----------END-----------\\

module.exports = {
  getUsers,
  getUser,
  addUser,
  deposit,
  updateCredit,
  withdrawMoney,
  transferMoney,
};
