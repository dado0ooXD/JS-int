// APPLY

const game = {
  title: "Fortnite",
  year: 2017,
};

function info(platform, character) {
  console.log(
    `${this.title} was released in ${this.year}, for ${platform}, it features the character ${character}.`
  );
}

info.call(game, "PC", "Black Knight"); // Funkcija console loguje ===>  Fortnite was released in 2017, for undefined, it features the character undefined.
