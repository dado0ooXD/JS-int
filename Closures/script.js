// SIMPLE EXAMPLE

let myName = "Davud";  // Ova varijabla je dostupna u printName() funkciji i u svim drugim scoupovima ovog JS fajla

function printName() {
    console.log(myName)
}

myName = "Amina"

// printName();  // Console loguje zadnju vrednost koja je dodeljena varijabli myName prije pozivanja ove funkcije;


function printNewName() {
    console.log(myName)
}

myName = "Mejra"

// printNewName();  // Console loguje zadnju vrednost koja je dodeljena varijabli myName prije pozivanja ove funkcije;

myName = "Mama";

// printName();   // Console loguje zadnju vrednost koja je dodeljena varijabli myName prije pozivanja ove funkcije;

myName = "Babo"

// printNewName();



// MORE COMPLEX EXAMPLE AND MOST COMMON USE CASE


function outerFunction(outerVariable) {
    return function innerFunction(innerVariable) {
        console.log("Outer Variable: ", outerVariable)
        console.log("Inner Variable: ", innerVariable)
    }
}

const newFunction = outerFunction("outside");
newFunction("inside");
// Closure - Kad imamo funkciju unutar druge funkcije, inner funkcija ima pristup svim varijablama i skoupu u outer funkcije 