function solve() {
    class Balloon {
        constructor(color, gasWeight) {
            this.color = color;
            this.gasWeight = gasWeight;
        }
    }

    class PartyBalloon extends Balloon {
        constructor(color, gasWeight, ribbonColor, ribbonLength) {
            super(color, gasWeight);
            this._ribbon = {
                color: ribbonColor,
                length: ribbonLength
            }
        }

        get ribbon() {
            return this._ribbon
        }

       
    }

    class BirthdayBalloon extends PartyBalloon {
        constructor(color, gasWeight, ribbonColor, ribbonLength, text) {
            super(color, gasWeight, ribbonColor, ribbonLength);
            this._text = text;
        }

        get text() {
            return this._text;
        }
    }

    return {
        Balloon,
        PartyBalloon,
        BirthdayBalloon,
    }
}

let bals = solve();

let pb = new bals.PartyBalloon("dad", 12, "sadadd", 45);
let bb = new bals.BirthdayBalloon("dad", 12, "sadadd", 45, "text");
console.log(pb);
console.log(bb.ribbon);
