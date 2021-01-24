//Write a function that takes two String arrays as parameters and returns an
//array that is the joining of those two arrays. Example: for the arrays: arr1=
//[“Hello”] and arr2= [“AppleSeeds”, “Bootcamp”] we’ll get [“Hello”,
//“AppleSeeds”, “Bootcamp”]

var myArr1 = ["hello","dear"];
var myArr2 = ["AppleSeeds","Boot-camper"];

function reverse(myArr1) {
    
    for(var i = 0; i < myArr1.length / 2 ; i++){


        let temp = myArr1[myArr1.length - i -1];
        //console.log("the word to add is: " + temp);
        myArr1[myArr1.length - 1 - i] = myArr1[i];
        myArr1[i] = temp;
    }
    console.log(myArr1);

}
    

function addArray(myArr1,myArr2) {

    reverse(myArr1);
    
    for(var i = 0; i < myArr1.length; i++){
        let temp = myArr1[i];
        console.log("the word to add is: " + temp);
        myArr2.unshift(temp);
    }
    console.log(myArr2);

}
addArray(myArr1,myArr2);