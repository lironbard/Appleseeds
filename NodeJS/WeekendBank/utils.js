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
const addUser = () => {};
//-----------END-----------\\

//---Deposit cash to a User---\\
const deposit = () => {};
//-----------END-----------\\

//---Update e users credit---\\
const updateCredit = (id, { credit }) => {
  let users = loadUsers();
  let user = users.find((el) => el.passport_id === id);
  if (!user) throw new Error("User not found");
  user = Object.assign(user, {
    credit: credit ? credit : user.credit,
  });
  saveUsers(user);
};
const saveUsers = (user) => {
  fs.writeFileSync(__dirname + "/users.json", JSON.stringify(user));
};
//-----------END-----------\\

//---Withdraw money from the user with cash---\\
const withdrawMoney = () => {};
//-----------END-----------\\

//---Transferring money from one usr to another---\\
const transferMoney = () => {};
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
