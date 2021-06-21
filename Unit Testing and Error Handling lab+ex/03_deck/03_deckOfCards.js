function printDeckOfCards(cards) {

    function createCard(face, suit) {
        let faces = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
        let suitsTostr = {
            "S": "\u2660",
            "H": "\u2665",
            "D": "\u2666",
            "C": "\u2663"
        }

        if (!faces.includes(face) || !Object.keys(suitsTostr).includes(suit)) {
            throw new Error("Error");
        }

        return {
            face,
            suit,
            toString() {
                return `${face}${suitsTostr[suit]}`
            }
        }
    }

    let res = [];
    for (let currCard of cards) {
        let faceCurr = currCard.substring(0, currCard.length - 1);
        let suitCurr = currCard.substr(currCard.length - 1, 1);

        try {
            res.push(createCard(faceCurr, suitCurr));
        } catch (err) {
            console.log("Invalid card: " + currCard);
            return;
        }
    }
    console.log(res.join(" "));
}

//module.exports = printDeckOfCards;
//console.log(printDeckOfCards(['5S', '3D', 'QD', '1C']));
printDeckOfCards(['5S', '3D', 'QD', '1C']);