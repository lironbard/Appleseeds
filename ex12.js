
var david = require('readline-sync');
var input = david.question("what is your status?");

function convert(x){
 var a = x.split('');
 for( var i=0 ; i<a.length ; i++){
    if(a[i]=="a"){
        a[i] = a[i].toUpperCase();
    }
    else if(a[i]=="e"){
        a[i] = a[i].toUpperCase();
    }
    else if(a[i]=="i"){
        a[i] = a[i].toUpperCase();
    }
    else if(a[i]=="o"){
        a[i] = a[i].toUpperCase();
    }
    else if(a[i]=="u"){
        a[i] = a[i].toUpperCase();
    }
    else{
        a[i] = a[i].toLowerCase();
    }
  }
  var b = a.join('');
  return b;
 }

var output = convert(input);
console.log("Result is ", output);