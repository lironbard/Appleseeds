const fs = require("fs");

// const book = {
//   title: "Harry Potter",
//   author: "Ryan Blob",
// };

// const bookJSON = JSON.stringify(book);
// fs.writeFileSync("1-json.json", bookJSON);

// const dataBuffer = fs.readFileSync("1-json.json"); // Switching the data to Binary
// const dataJSON = dataBuffer.toString(); // Converting the data to standard string in JavaScript
// const data = JSON.parse(dataJSON); // Parsed that dataJson to an Object
// console.log(data.title); // Access a property from the Object

const dataBuffer = fs.readFileSync("1-json.json");
const dataJSON = dataBuffer.toString();
const data = JSON.parse(dataJSON);

data.name = "MR.Bean";
data.age = 102;
data.planet = "Mars";

const userJSON = JSON.stringify(data);
fs.writeFileSync("1-json.json", userJSON);
