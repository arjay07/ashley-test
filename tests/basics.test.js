const basics = require("../activities/basics");

beforeEach(() => {
    console.log = jest.fn();
});

test("1. Print 'Hello, world!' to the console.", () => {
    basics.helloWorld();
    expect(console.log.mock.calls[0][0]).toBe("Hello, world!");
});

test("2. Change the variable provided to print 'PASSED' to the console.", () => {
    basics.controlFlow();
    expect(console.log.mock.calls[0][0]).toBe("PASSED");
});

test("3. Implement a calculation in the function that returns the product of 'a' and 'b'.", () => {
    const cases = [
        [2, 3, 6],
        [6, 2, 12],
        [8, 8, 64],
        [9, 5, 45]
    ];

    cases.forEach(c => {
        expect(basics.product(c[0], c[1])).toBe(c[2]);
    });
});

test("4. Use the variables 'string1' and 'string2' to return the message 'Plus signs are like glue!'", () => {
    expect(basics.concatenateStrings()).toBe("Plus signs are like glue!");
});

test("5. Using the array below, return the words `cat and dog`.", () => {
    expect(basics.arrayPositions()).toBe("cat and dog");
});

test("6. Return the length of this array.", () => {
    expect(basics.arrayLength()).toBe(10);
});

test("7. Print out all the words in the array on it's own line using a for loop.", () => {
    basics.forLoop();
    const words = ["Hello!", "I", "am", "on", "my", "own", "line."];

    for(let i = 0; i < words.length; i++) {
        expect(console.log.mock.calls[i][0]).toBe(words[i]);
    }
});

test("8. Create a while loop that prints out numbers 1 through 10", () => {
    basics.whileLoop();

    expect(console.log.mock.calls.length).toBe(10);
    
    console.log.mock.calls.forEach((call, i) => {
        const log = call[0];
        const count = i + 1;
        expect(log).toBe(count);
    });
});

test("9. Change the variable to make the return statement true.", () => {
    expect(basics.booleans()).toBe(true);
});

test("10. Split the string into an array of all of it's characters and return it.", () => {
    const toSplit = "abcdefghijklmnopqrstuvwxyz";
    const splitted = toSplit.split("");

    expect(basics.split()).toStrictEqual(splitted);
});