
var i = 0;
for (i = 1; i < 100; i++){
    if (i % 7 != 0 && i%10 != 7 && Math.floor(i/10) != 7) {
        console.log(i);

    }
    else {
        console.log('boom!');
    }
}