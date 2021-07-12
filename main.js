const { exec } = require("child_process");
const prompt = require("prompt-sync")();

const activities = [
    "Basics"
];

function main() {
    let choice = 0;
    while (choice != activities.length + 1) {
        console.clear();
        console.log("Ashley's Tests\n----------------------\n");
        activities.forEach((activity, i) => {
            console.log(`${i + 1}. ${activity}`);
        });
        console.log(`${activities.length + 1}. Exit`);
        console.log("\n\n-------------------------\n");
        choice = parseInt(prompt("Which test would you like to run? "));
        
        if (isNaN(choice)) continue;

        runTest(activities[choice]);
    }
}

function runTest(activityName) {
    exec(`npm test -t '${activityName}'`, (error, stdout, stderr) => {
        if (error) {
            console.log(`${error.message}`);
            return;
        }
    
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        console.log(`${stdout}`);
    });
}

if (require.main === module) {
    main();
}