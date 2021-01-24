
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
  if (x <= 3)
return true;

var counter = 0;
for (j = 1 ; j <= x; j++)
    {
        if (x % j == 0)
    {
        counter++;
    }
}
     
 if (2 < counter)
 {
    return false;
 }
return true;
}