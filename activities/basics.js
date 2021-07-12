// Basics


// 1. Print 'Hello, world!' to the console.
function helloWorld() {

    console.log("Hello, world!");

}

// 2. Change the variable provided to print 'PASSED' to the console.
// ONLY CHANGE THE VARIABLE
function controlFlow() {

    // Change this
    const age = 19;

    // Do not change anything below.
    if (age < 18) {
        console.log("FAILED");
    } else if (age > 30) {
        console.log("FAILED");
    } else if (age === 18) {
        console.log("FAILED");
    } else if (age >= 20) {
        console.log("FAILED");
    } else if (age > 18) {
        console.log("PASSED");
    } 
}

// 3. Implement a calculation in the function that returns the product of 'a' and 'b'.
function product(a, b) {

    return a * b;

}

// 4. Use the variables 'string1' and 'string2' to return the message 'Plus signs are like glue!'
function concatenateStrings() {

    const string1 = "are like glue!";
    const string2 = "Plus signs";
    
    // Change this variable
    const message = string2 + " " + string1;

    return message;

}

// 5. Using the array below, return the words `cat and dog`.
function arrayPositions() {

    const words = ["and", "the", "fish", "cat", "dog", "bird"];

    // Change this variable
    const message = `${words[3]} ${words[0]} ${words[4]}`;

    return message

}

// 6. Return the length of this array.
function arrayLength() {

    const arr = [1, 55, 3, 4, 32, 6, 7, 8, 9, 20];
    
    return arr.length;

}

// 7. Print out all the words in the array on it's own line using a for loop.
function forLoop() {
   
    const words = ["Hello!", "I", "am", "on", "my", "own", "line."];

    for(let i = 0; i < words.length; i++) {
        console.log(words[i]);
    }

}

// 8. Create a while loop that prints out numbers 1 through 10
function whileLoop() {

    let x = 1;

    while(x <= 10) {
        console.log(x++);
    }

}

// 9. Change the variable to make the return statement true.
function booleans() {

    // Change this
    const x = "Hello!";

    return x.length == 6;

}

// 10. Split the string into an array of all of it's characters and return it.
function split() {
    const toSplit = "abcdefghijklmnopqrstuvwxyz";
    return toSplit.split("");
}

module.exports = {
    helloWorld,
    controlFlow,
    product,
    concatenateStrings,
    arrayPositions,
    arrayLength,
    forLoop,
    whileLoop,
    booleans,
    split
};