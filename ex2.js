var input = require('readline-sync');

var num1 = input.question("Enter the first number: ");
var num2 = input.question("Enter the second number: ");


var n1 = Number(num1);
var n2 = Number(num2);

if (n1+n2 == 10)
{
      console.log("makes 10");
}
else
{
      console.log("nope");
}