const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Enter student marks (0 - 100:", function(answer ){
    let marks = parseInt(answer);
    
    //program that prompts user to input student marks

    //give input prompt

    //check inputs

    if (marks < 0 && marks > 100){
console.log("ERROR: Invalid input, please enter a number between 0 and 100")
    }
    if (marks > 79) {
        console.log("grades: A");
    }
    else if (marks >= 60) {
        console.log("grade: B");
    }
    else if (marks >= 49) {
        console.log("grade: C");
    }
    else if (marks >= 40) {
        console.log("grade: D");
    }
    else {
        console.log("grade: E");
    }

    //Output correct grade
    console.log("student grade {Grade}")

    rl.close();
    
});
