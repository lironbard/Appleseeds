var input = require('readline-sync');

var number = input.question("Enter a number from 0 to 9    ");
if (isNaN(number) === true){
    console.log("please enter only a number!")
    return;
}


number = parseInt(number);

switch(number) {
  case 1:
      console.log("one");
    break;
  case 2:
      console.log("Two");
    break;
  case 3:
      console.log("three");
    break;
  case 4:
      console.log("four");
    break;
  case 5:
      console.log("five");
    break;
  case 6:
      console.log("six");
    break;
  case 7:
      console.log("seven");
    break;
  case 8:
      console.log("eight");
    break;
  case 9:
      console.log("nine");
    break;
  default:
    console.log("Number not in range");
    break;
}