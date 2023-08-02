// Classes

// class Player {
//     constructor() {
//         console.log("This is a first player!");
//         console.log(this);
//         this.name = "Ronaldo"
//         this.team = "Real Madrid"
//         this.position = "Striker"
//     }
// }

// let player1 = new Player();

// Kod ovog primera otvorimo ovu klasu u konozoli videcemo ove propsove sto su obelezeni sa this.

class Player {
    // Constructor

  constructor(player, team, position) {
    console.log("This is a first player!");
    this.name = player;
    this.team = team;
    this.position = position;
    }
    // Method

    getPlayer(from) {
        return "First player is " + this.name + " and he's from " + from
    }
}

let player1 = new Player("Ronaldo", "Real Madrid", "Striker");
let player2 = new Player("Messi", "Barcelona", "Striker");
console.log(player1.getPlayer("Portugal")) // ===> First player is Ronaldo and he's from Portugal.

// Ovaj primer vraca isto kao i ovaj gore samo sto smo ovaj put prosledili argumente
// koji su se trazili u konstruktoru.