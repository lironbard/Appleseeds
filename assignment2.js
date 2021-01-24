'use strict';
console.log("###---------- W A R   G A M E ----------###");

var temp = require('readline-sync');
var name = temp.question("Please enter your name ");
console.log("Welcome " + name + " prepare to loose all you'r points!!!!!!");
var bet = temp.question("Please enter your bet  $$$  ");
var userNotBroke = true;
var userCounter = 50;

function betIsValid(bet, userCounter) {
    if (bet > 0 && userCounter > bet){
        return true;
    }
    return false;
}

 while (betIsValid(bet, userCounter) && userNotBroke)
  {
     var userCard = Math.random()* 12;
     var compCard = Math.random()* 12;

     console.log("Your card is:  " + userCard);
     console.log("Your opponent card is:  " + compCard);

     
     if (userCard > compCard)
     {
       userCounter = parseInt(userCounter);
       bet = parseInt(bet);
       userCounter += bet;
       console.log("Nice " + name + " you won " + bet + " points!!!");
       console.log("Now you have " + userCounter + " points");
     }
    else
      {
        userCounter -= bet;
        console.log("HAHAHAHA " + name + " you lost " + bet + " points, Shame on you!");
        console.log("Now you have " + userCounter + " points");
      }

    if (userCounter <= 0 ) 
    {
      UserNotBroke = false;
      break;
    }
    var Q = temp.question("Another round???   1.yes!!!   2.leave like a kid :/ ");
    if (Q == 2){
        console.log("go change your diaper you KID!");
        break;
    }
    bet = temp.question("Please enter your bet!$!$  ");
  }

  console.log("Bye!");