function solve(input1, input2) {
    let speed = Number(input1);
    let area = input2;

    let severity = 0;
    let limit = 0;
    if (area == "motorway") {
        limit = 130;
        severity = speed - 130;
    } else if (area == "interstate") {
        limit = 90;
        severity = speed - 90;
    } else if (area == "city") {
        limit = 50;
        severity = speed - 50;
    } else if (area == "residential") {
        limit = 20;
        severity = speed - 20;
    } else{
        return "";
    }
    
    if (severity <= 0) {
        return (`Driving ${speed} km/h in a ${limit} zone`);
    } else if (severity <= 20) {
        return (`The speed is ${severity} km/h faster than the allowed speed of ${limit} - speeding`);
    } else if (severity <= 40) {
        return (`The speed is ${severity} km/h faster than the allowed speed of ${limit} - excessive speeding`);
    } else if (severity > 40){
        return (`The speed is ${severity} km/h faster than the allowed speed of ${limit} - reckless driving`);
    } 

}

console.log(solve(
    40, 'city'
))