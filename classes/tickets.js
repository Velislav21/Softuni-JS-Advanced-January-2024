function tickets(input, criteria) {

    let ticketsArr = []
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    input.forEach((currentCity) => {
        let [destination, price, status] = currentCity.split('|');
        price = Number(price);
        let currentTicket = new Ticket(destination, price, status);
        ticketsArr.push(currentTicket);
    });

    // ticketsArr.sort((a, b) => {

    // })
    console.log(ticketsArr)
}
tickets(['Philadelphia|94.20|available',

    'New York City|95.99|available',

    'New York City|95.99|sold',

    'Boston|126.20|departed'],

    'price')