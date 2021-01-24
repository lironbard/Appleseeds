

var david = require('readline-sync');
var input = david.question("what is your status?  ");

var i = 0;
for ( i = 0; i < input.length; i++ ){
    if (input.charAt(i) == " "){
        input=input.split(' ').join('*');
    }
}
console.log(input);