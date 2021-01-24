

var david = require('readline-sync');
var input = david.question("Enter a number / sentence");

for (i = 0; i <= input.length/2;i++){
    if (input.charAt(i) !== input.charAt(input.length -i - 1)){
        console.log("It is NOT a Palindrome");
        return;
    }
}

console.log("It is Palindrome");