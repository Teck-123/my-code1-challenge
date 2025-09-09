// A program that prompts the user to input student marks
// The final output will indicate whether the grades are A, B, C, D and E.
 function studentgrade(marks) { 
    if (marks < 0 ||  marks >=100) {
        console.log("Invalid input. Marks should be between 0 and 100")
    }
    if (marks > 79)  {
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
    else if (marks < 40){
        console.log("grade: E");
    } 
    
    };

studentgrade(99)
