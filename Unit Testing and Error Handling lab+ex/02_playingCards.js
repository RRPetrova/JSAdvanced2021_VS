function solve(face, suit) {
    let faces = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
    
    let suitsTostr = {
        "S": "\u2660",
        "H": "\u2665",
        "D": "\u2666",
        "C": "\u2663"
    }

    if(!faces.includes(face)) {
        throw new Error ("Invalid input");
    }

    if(!Object.keys(suitsTostr).includes(suit)) {
        throw new Error ("Invalid input");
    }

    return {
        face,
        suit,
        toString() {
            return `${face}${suitsTostr[suit]}`
        }
    }

}

let card = solve("1", "S");
console.log(card.toString());
card = solve("2", "s");
console.log(card.toString());