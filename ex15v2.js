//Write a function that takes two String arrays as parameters and returns an
//array that is the joining of those two arrays. Example: for the arrays: arr1=
//[“Hello”] and arr2= [“AppleSeeds”, “Bootcamp”] we’ll get [“Hello”,
//“AppleSeeds”, “Bootcamp”]

var myArr1 = ["one","two"];
var myArr2 = ["three","four"];


function addArray(myArr1,myArr2) {

    let long = myArr1.length + myArr2.length;
    let myArr3 = [];
    myArr3.length = long;
    
    for(var i = 0; i < myArr1.length ; i++){
        myArr3[i] = myArr1[i];
    }
    var index =0;
    for(var i = myArr1.length ; i < myArr3.length ; i++){
        myArr3[i] = myArr2[index++];
    }
    console.log(myArr3);
}
addArray(myArr1,myArr2);