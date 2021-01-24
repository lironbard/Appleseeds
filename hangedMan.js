'use strict';

var readline = require('readline-sync');
var figlet = require('figlet');

figlet('Welcome To Hanged Man!', function(err, data) {

    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data);
    startListening();
});

var wordArray = ["Integer", "Const" , "Component" , "Json" , "GitHub" , "Python" , "Cobol" , "Java" , "Nodejs" , "React" , "Heroku" , "Sql" , "Angular"];

var myArray = [];

//var myMap = new Set([['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]);

var attempts = 10;

var word = wordArray[Math.floor(Math.random()*wordArray.length)];

function isExist(array,char){
    for(var i = 0; i < array.length;i++){
        if(myArray[i].toLowerCase() == char.toLowerCase()){
            return true;
        }
    }
    return false;
}
function startListening() {
  while (attempts){

      var wordBank = "";
      console.log('The computer chose:' + word);
      var input = readline.question("Please type your guess (a single letter): ");

      if (typeof input == typeof word){
          console.log("inside first if");
          if (word.includes(input)) {
              myArray.push(input);
              console.log("You'r getting close! " + input + " is exist in the word!");

          } else {
              attempts--;
              console.log("attempts: " + attempts);
          }

          for (var j = 0; j < word.length; j++){
              if (isExist(myArray,word[j])){
                  wordBank += word[j];
                  //console.log(word[j]);
              } else {
                  wordBank += "*";
                  //console.log("*");
              }
          }
          console.log(wordBank);
      } else {
          console.log("Your guess is invalid (number / symbol) , please try again, you will not lose an attempt");
      }
  }
}
