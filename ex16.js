
var myArr = [1,2,3,4,5];

function reverse(myArr) {
    
    for(var i = 0; i < myArr.length / 2 ; i++){


        let temp = myArr[myArr.length - i -1];
        //console.log("the last number is: " + temp);
        myArr[myArr.length - 1 - i] = myArr[i];
        myArr[i] = temp;
    }
    console.log(myArr);

}
    reverse(myArr);
