class SummerCamp {
    constructor(organizer, location) {
        this.organizer = organizer;
        this.location = location;

        this.priceForTheCamp = {
            child: 150,
            student: 300,
            collegian: 500
        }
        this.listOfParticipants = [];
    }

    registerParticipant(name, condition, money) {
        // condition --> child, student or collegian
        if (!this.priceForTheCamp[condition]) {
            throw new Error('Unsuccessful registration at the camp.');
        }

        if (this.priceForTheCamp[condition] > money) {
            return `The money is not enough to pay the stay at the camp.`
        }
        if (this.listOfParticipants.some(x => x.name == name)) {
            return `The ${name} is already registered at the camp.`
        }

        this.listOfParticipants.push({
            name,
            condition,
            power: 100,
            wins: 0
        })
        return `The ${name} was successfully registered.`
    }
    unregisterParticipant(name) {

        if (!this.listOfParticipants.some(x => x.name == name)) {
            throw new Error(`The ${name} is not registered in the camp.`)
        }

        this.listOfParticipants = this.listOfParticipants.filter(x => x.name != name);
        return `The ${name} removed successfully.`
        // let participantIndex = this.listOfParticipants.findIndex(x => x.name == name);
    }
    timeToPlay(typeOfGame, participant1, participant2) {
        const player1 = this.listOfParticipants.find(x => x.name == participant1)

        if (!player1) {
            throw new Error(`Invalid entered name/s.`)
        }
        if (typeOfGame == 'WaterBalloonFights') {
            let winnerName = ''
            const player2 = this.listOfParticipants.find(x => x.name == participant2)

            if (!player2) {
                throw new Error(`Invalid entered name/s.`)
            }

            if (player1.condition != player2.condition) {
                throw new Error(`Choose players with equal condition.`)
            }

            if (player1.power > player2.power) {
                player1.wins++;
                winnerName = player1.name
                return `The ${winnerName} is winner in the game WaterBalloonFights.`

            } else if (player2.power > player1.power) {
                player2.wins++;
                winnerName = player2.name
                return `The ${winnerName} is winner in the game WaterBalloonFights.`
            } else {
                return `There is no winner.`
            }

        }
        if (typeOfGame == 'Battleship') {
            player1.power += 20;
            return `The ${player1.name} successfully completed the game Battleship.`
        }
    }
    toString() {
        const result = [];
        result.push(`${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}`);

        this.listOfParticipants
            .sort((a, b) => b.wins - a.wins)
            .forEach(x => result.push(`${x.name} - ${x.condition} - ${x.power} - ${x.wins}`));

        return result.join('\n')
    }
}

// const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
// console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
// // console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));
// console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
// console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));

// const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 200));
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.registerParticipant("Leila Wolfe", "childd", 200));

// const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.unregisterParticipant("Petar"));
// console.log(summerCamp.unregisterParticipant("Petar Petarson"));
const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
// console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));
console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));

console.log(summerCamp.toString());