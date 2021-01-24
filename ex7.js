var input = require('readline-sync');

var num1 = input.question("Please choose a number: ");
var temp = 1;
for (var i =1; i <= num1; i++)
{
    temp *= i;
}
console.log(temp);