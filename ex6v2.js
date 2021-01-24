
var input = require('readline-sync');

var num1 = 0;

while (num1 < 10)
{
    num1 = input.question("Please choose a number LARGER than 10: ");
if (isNaN(num1) === true)
num1 = 0;

}
console.log("thank you");