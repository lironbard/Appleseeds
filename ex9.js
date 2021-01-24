

var david = require('readline-sync');
var input = david.question("Please choose a number: ");

var i = 1;
var j = 0;
for (i = 1; i <= input; i++){
    if (isPrimary(i) === true){
        console.log(i);
    }
}

function isPrimary(x){
    for (j = 2 ; j < x; j++){
        if (x % j == 0){
            return false;
        }
        else{
            return true;
        }
    }
}

