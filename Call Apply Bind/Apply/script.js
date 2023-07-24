// APPLY

// Apply() metoda je slicna call() metodi, ali glavna razlika je u nacinu prosledjivanja argumenta,
// kod apply() metode argumenti koje saljemo pored objekta moraju biti u nizu ===> imeFunkcije.apply(imeObjekta, [prviArg, drugiArg]).

const game = {
  title: "Fortnite",
    year: 2017,
  season: 2
};

function info(platform, character) {
  console.log(
    `${this.title} was released in ${this.year}, for ${platform}, it features the character ${character} from season ${this.season}.`
  );
}

info.call(game); // Funkcija console loguje ===>  Fortnite was released in 2017, for undefined, it features the character undefined.
info.call(game, "PC", "Black Knight"); // Funkcija console loguje ===>
// Fortnite was released in 2017, for PC, it features the character Black Knight from season 2.

// info.apply(game, "PS4", "Red Knight");  Ovakav nacin nece da radi sa apply() metodom kao sto je radio sa call() metodom.
info.apply(game, ["PS4", "Nog Ops"]); // Ovo je ispravan nacin upotrebe apply() metode i ovo ce da radi jer se PS4 i Nog Ops
// argumenti nalaze u nizu.


