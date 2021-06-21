function solve(input, sortCriteria) {

    class Ticket {
        constructor(line) {
            let [destination, price, status] = line.split("|");
            this.destination = destination;
            this.price = Number(price);
            this.status = status;
        }
    }

    return input.map(t => new Ticket(t)).sort(sortFunc(sortCriteria));
    
    function sortFunc(sortCriteria) {
        if(sortCriteria == "destination") {
           return (a,b) => a.destination.localeCompare(b.destination);
        } else if(sortCriteria == "price") {
           return (a,b) => a.price- b.price;
        } else if(sortCriteria == "status"){
           return (a,b) => a.status.localeCompare(b.status);
        }
    }

}
    console.log(solve(
        ['Philadelphia|94.20|available',
            'New York City|95.99|available',
            'New York City|95.99|sold',
            'Boston|126.20|departed'],
        'destination'

    ))


   