var david = require('readline-sync');
var input = david.question("what is the length?");

var size = input;
var arr = [1];

for (var i = 0 ; i <size; i++)
{
arr.push(Math.random()* 51);
}

var min = arr[0];
var max = arr[0];

for ( i =0 ; i <size; i++)
{
if (arr[i] < min)
min = arr[i];
if (arr[i] > max)
max = arr[i];

}

console.log ("min is : " , min);

console.log ("max is : " , max);