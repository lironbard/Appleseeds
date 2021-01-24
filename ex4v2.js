
var input = require('readline-sync');

var num1 = input.question("1. How many people are you going with?");
if (isNaN(num1) === true){ 
   throw "stop execution";
}

var kosher = input.question("2. Should it be Kosher? type yes / no : ");
if (kosher != 'yes' && kosher != 'no'){
  console.log("ERROR - kosher isn't a boolean!!");
    throw "stop execution";

}
var lemehadrin = 'no';
if (kosher == 'yes')
{
   lemehadrin  = input.question("should it be Kashrut lemehadrin? type yes / no : ");
  if (lemehadrin  != 'yes' && lemehadrin != 'no'){
    throw "stop execution";
  }
}


try {
} catch(e) {
  console.error();
}


var kindOfFood = ["Italian", "Japanese", "American"];
var favFood = input.keyInSelect(kindOfFood, "Whats your favorite food?");



if ((num1 > 2) && (kosher == 'yes') && (lemehadrin == 'yes') && (kindOfFood[favFood] == "Italian"))
  {
    console.log(" Joya is recomended");
  }
  else if ((num1 > 2) && (kosher  == 'yes') && (lemehadrin  == 'no') && (kindOfFood[favFood] == "Japanese"))
  {
    console.log(" ‪Minna Tomei‬ is recomended");    
  }
  else if ((num1 > 2) && (kosher == 'no') && (lemehadrin == 'no') && (kindOfFood[favFood] == "American"))
  {
    console.log(" mcdonalds is recomended");    
  }
   else if ((num1 > 2) && (kosher == 'yes') && (lemehadrin == 'no') && (kindOfFood[favFood] == "American"))
  {
        console.log(" BBB is recomended");
  }
   else if ((num1 > 2) && (kosher  == 'no') && (lemehadrin == 'no') && (kindOfFood[favFood] == "Japanese"))
  {
        console.log("Xing Long  is recomended");
  }
 else if ((num1 > 1) && (kosher  == 'no') && (lemehadrin == 'no') && (kindOfFood[favFood] == "Italian"))
  {
        console.log(" Pomo pizza is recomended");
  }