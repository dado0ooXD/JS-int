// Naslov

const lufthansa = {
  airline: "Lufthansa",
  iataCode: "LH",
  bookings: [],
  // book: function() {} - Moze i ova sintaksa.
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode} ${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode} ${flightNum}`, name });
  },
};

// Funkcija book() iz objekta lufthansa console loguje prvo recenicu a onda pusha u prazan booking array
// dva objekta.
// Kad pozovemo funkciju book() iz objekta lufthansa sa argumentima i console logujemo objekat lufthansa
// videcemo da je bookings array dobio novi objekat koji cine argumenti funkcije book().

lufthansa.book(165, "Davud Carovac");
lufthansa.book(287, "Amina Carovac");
lufthansa.book(220, "Merjem Carovac");

console.log(lufthansa);

const eurowings = {
  name: "Eurowings",
  iataCode: "EW",
  bookings: [],
};

const book = lufthansa.book;

// Does NOT work
// book(23, "Cristiano Ronaldo")

book.call(eurowings, 23, "Cristiano Ronaldo");
book.call(eurowings, 32, "Novi Pazar");
// console.log(eurowings);



// ONE MORE EXAMPLE

const game = {
  title: "Fortnite",
  year: 2017,
};

function info() {
  console.log(`${this.title} was released in ${this.year}`);
  // console.log(this); === Ovaj console log vraca objekat game jer sam ga pozvao preko funkcije call().
}

// info() === undefined was released in undefined.
info.call(game); 
// === Fortnite was released in 2017.