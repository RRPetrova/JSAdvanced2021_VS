class LineManager {
    constructor(stops) {
        this.stops = stops;
        this.currStopIndex = 0;
        this.lastStopIndex = this._stops.length - 1;
        this.traveledTime = 0;
        this.delay = 0;
    }

    set stops(stops) {
        stops.forEach(obj => {
            if (obj.name === "" || obj.timeToNext < 0 || typeof obj.timeToNext !== "number") {
                throw new Error("wrong")
            }
        })
        this._stops = stops;
    }

    get stops() {
        return this._stops;
    }

    get atDepot() {
        return this.currStopIndex === this.lastStopIndex;
    }

    get nextStopName() {
        if (this.atDepot) {
            return "At depot.";
        }
        return this._stops[this.currStopIndex + 1].name;
    }

    get currentDelay() {
        return this.delay;
    }

    arriveAtStop(minutes) {
        let currTimeToNext = this._stops[this.currStopIndex].timeToNext; //4
        this.traveledTime += minutes; // 0 + 4
        this.delay += minutes - currTimeToNext; // oldDelay + 4 - 4;
        this.currStopIndex++;
        return this.atDepot ? false : true;
    }

    toString() {
        let res = "";
        res += `Line summary\n`
        if (this.currStopIndex != this.lastStopIndex-1) {
            res += `- Next stop: ${this.nextStopName}\n`
        } else {
            res += `- Course completed\n`
        }
        res += `- Stops covered: ${this.currStopIndex}\n`
        res += `- Time on course: ${this.traveledTime} minutes\n`
        res += `- Delay: ${this.delay} minutes`

        return res;
    }
}

const man = new LineManager([
    { name: 'Depot', timeToNext: 4 },
    { name: 'Romanian Embassy', timeToNext: 2 },
    { name: 'TV Tower', timeToNext: 3 },
    { name: 'Interpred', timeToNext: 4 },
    { name: 'Dianabad', timeToNext: 2 },
    { name: 'Depot', timeToNext: 0 },
]);

while (man.atDepot === false) {
    console.log(man.toString());
    man.arriveAtStop(4);
}

// try {
//     const wrong = new LineManager([
//         { name: 'Stop', timeToNext: { wrong: 'Should be a number' } }
//     ]);
// } catch (error) {
//     console.log(error.message)
// }