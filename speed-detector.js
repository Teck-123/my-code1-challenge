function speedDetector(speed) {
     const speedlimit = 70;
     const kmperPoint = 5;

    if (speed < speedlimit) {
    return "OK";
    }
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
console.log(speedDetector(50))
console.log(speedDetector(140))
console.log(speedDetector(90))