var figlet = require('figlet');
figlet('Welcome To Hanged Man!', function(err, data) {

    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data);
    //var readline = require('readline-sync');
});