const { testNumber } = require('./game'); //here we deconstructed our umported object

process.stdout.write("I'm thinking of a number from 1 through 10. What do you think it is? \n(Write \"quit\" to give up.)\n\nIs the number ... ");

let playgame = (userInput) => {
    let input = userInput.toString().trim(); // we transform the userInput into a usable string 
    testNumber(input);// we pass it to our imported function
}

process.stdin.on('data', playgame); // assigned the callback function playgame to our event
// whenever the user puts data into the terminal it will be passed as argument to the callback function