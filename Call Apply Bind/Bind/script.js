// BIND


const game = {
    title: "Fortnite",
    year: 2017,
    season: 2
}

function info(platform, character) {
    console.log(
      `${this.title} was released in ${this.year}, for ${platform}, it features the character ${character} from season ${this.season}.`
    );
}
  
info(); // ======> undefined was released in undefined, for undefined, it features the character undefined from season undefined.

const gameInfo = info.bind(game, "PC", "Black Knight")
gameInfo(); // ======> Fortnite was released in 2017, for PC, it features the character Black Knight from season 2.


// Primena na gameInfo na drugi objekat:

const game2 = {
    title: "Lol",
    year: 1999,
    season: 4
}

gameInfo.bind(game2);
gameInfo(); // =====> Fortnite was released in 2017, for PC, it features the character Black Knight from season 2.
// Vraca isto kao i za prvi objekat.