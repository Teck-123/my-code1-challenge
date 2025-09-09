// Program that takes speed limit of a car

function speedDetector(speed) {
     const speedlimit = 70;
     const kmperPoint = 5;

    if (speed < speedlimit) {
    return "OK";
    }
    
// Math.floor 
// // It accepts one numeric parameter
// It always rounds down towards negative infinity.
    
    else {
    const points = Math.floor((speed - speedlimit) / kmperPoint);
    if (points > 12) {
        return "License  suspended";
    }
    else { 
        return "Points:" + points;
    }
    }
}

// Final output includes number of points,ok and license suspended
console.log(speedDetector(50))
console.log(speedDetector(140))
console.log(speedDetector(90))