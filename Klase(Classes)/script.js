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
  constructor(player, team, position) {
    console.log("This is a first player!");
    this.name = player;
    this.team = team;
    this.position = position;
  }
}

let player1 = new Player("Ronaldo", "Real Madrid", "Striker");

// Ovaj primer vraca isto kao i ovaj gore samo sto smo ovaj put prosledili argumente
// koji su se trazili u konstruktoru.