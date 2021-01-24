'use strict';
var david = require('readline-sync');
var input = david.question("what is your status? ");


function findLongestWord(input) {
    let longestWord = 0;
    let strSplit = input.split(' ');
    
    for(var i = 0; i < strSplit.length-1; i++){
      if(strSplit[i].length > longestWord.length){
      longestWord = strSplit[i];
       }
    }
    //console.log(strSplit[longestWord]);
    //console.log(longestWord);
    //console.log(i);
    console.log(strSplit[i]);
    //console.log(strSplit);
    //console.log(longestWord);
}
    findLongestWord(input);
