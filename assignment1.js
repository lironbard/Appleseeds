console.log("#########################" , '\n');
console.log("Hello :) ", '\n' ,"Welcome to: " , '\n');
console.log("What Character From Rick And Morty Are You Most Like? " , '\n');
console.log("#########################" , '\n');


console.log("First question:" , '\n');

var input = require('readline-sync');


var Q1 = ["I don't need a reason", "I got into Rick and Morty since my friends were into it", "I want to know my result." , "It's a nice distraction."];
var A1 = input.keyInSelect(Q1, "Let's start with why you're taking this quiz...?");

var Q2 = ["A few interactions between friends. But nothing major. ", "Everyone does. But what's the point of getting hung up on them? ", " I have done horrible things in my past." , " I never finished school or got my dream job."];
var A2 = input.keyInSelect(Q2, "Do you have any regrets? If so, which of these comes the closest?");

var Q3 = ["Highly intelligent  than social. ", "Supportive than expressive. ", "Loved than smart. " , "Open than selfish."];
var A3 = input.keyInSelect(Q3, "Would you rather be.. ?");

var Q4 = ["Throw a big party with all of my friends, plus a few others. ", " However is traditionally acceptable.", "I don't celebrate my birthday. " , "Just another day. I probably didn't even notice. "];
var A4 = input.keyInSelect(Q4, "It's your birthday. How do you celebrate ?");

var Q5 = ["Blame them. ", " Blame myself.", "Do everything I can to patch the rift. " , "Walk away. If the problem hasn't fixed itself by now, it's not going to. "];
var A5 = input.keyInSelect(Q5, "You and someone close are having a dispute. The issue has been ongoing and things are getting pretty heated, again. How do you try to solve things? ?");

var Q6 = ["Something they asked for. ", " Something popular.", "Something well thought out." , " Something conventionally acceptable. "];
var A6 = input.keyInSelect(Q6, "You're getting a gift for a close friend. Which of these do you give them ?");

var Q7 = [" I'm sad, but I understand why they ended things.", "I have never been in a relationship and don't want one. ", "I break up with them." , "End things mutually. "];
var A7 = input.keyInSelect(Q7, " How do your relationships typically end??");


var Q8 = [" Ice cream.", " Something light.", "A salad." , " Something tasty but kind of healthy."];
var A8 = input.keyInSelect(Q8, "Which of these would you most want to eat?");

var Q9 = ["I try not to think about it too much anymore. ", " I'm not really sure. I'm still figuring out for myself.", "Confusing." , " Nothing matters in the end. What matters is now."];
var A9 = input.keyInSelect(Q9, " What's your philosophy on life?");

var Q10 = [" Helpful, follower, accessible. ", "Lovable, desperate, try-hard. ", "Typical, happy, shallow." , "Confused, impressionable, sincere.  "];
var A10= input.keyInSelect(Q10, "Pick a set from the following that you feel best describes you.");



var sum = A1 +A2 + A3 + A4 +A5+A6 + A7+ A8 +A9 + A10;

//mix the answer
sum  += Math.floor(Math.random()*10);

console.log("#########################" , '\n');
console.log("Quiz results:" , '\n');



switch(sum) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log("You are .... Jerry Smith : You're in love with love, extremely insecure in yourself, and you actually care about your family and those close to you.");
      break;
    case 6:
    case 7:
    case 8:
        console.log("You are ....Beth Smith : Ambitious, smart, and with just a touch of a superiority complex, you're the horse surgeon Beth Smith! ");
      break;
    case 9:
        console.log("You are ....Mr Meeseeks :  Helpful, capable, with that can do attitude, you're a Mr. Meeseeks! No task is too hard, no challenge too unacceptable, you always see your work through to the end");
      break;
    default:
      console.log("You are .... Rick Sanchez :  Amazingly resourceful, genius level intellect, and an inner conflict more powerful than a super nova; you're the wandering scientist Rick Sanchez! Well, I should say that you're 'most like a Rick.");
      break;
  }