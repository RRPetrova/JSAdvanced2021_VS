function solve(numSteps, lengthFootprintMeters, speedKmH) {
    let metersToUniv = numSteps * lengthFootprintMeters; //4000 * 0.6 = 2400
    let breakTimeSec = Math.floor(metersToUniv / 500) * 60; //2400 / 500 = 4
    let km = metersToUniv / 1000;
  //  let seconds = km * 3600 / speedKmH; 
  //  let timeSec =  km * speedKmH * 1/speedKmH + breakTimeMin; //2.4 * 5 + 4 = 24min

    let totalSeconds = breakTimeSec + km * 3600 / speedKmH;
    let hours = Math.trunc(totalSeconds / 3600);
    if (hours < 10) {
        hours = "0" + hours;
    }
    let min = Math.trunc((totalSeconds - hours * 60) / 60); //1968 / 60 = 32
    if (min < 10) {
        min = "0" + min;
    }
    let sec = (totalSeconds - hours * 3600 - 60 * min).toFixed(0);
    if (sec < 10) {
        sec = "0" + sec;
    }

   return (`${hours}:${min}:${sec}`);
}

console.log(solve(
    2564, 0.70, 5.5
))