// SIMPLE EXAMPLE

let myName = "Davud";  // Ova varijabla je dostupna u printName() funkciji i u svim drugim scoupovima ovog JS fajla

function printName() {
    console.log(myName)
}

myName = "Amina"

printName();  // Console loguje zadnju vrednost koja je dodeljena varijabli myName;


function printNewName() {
    console.log(myName)
}

myName = "Mejra"

printNewName();  // Console loguje zadnju vrednost koja je dodeljena varijabli myName;

myName = "Mama";

printName();   // Console loguje zadnju vrednost koja je dodeljena varijabli myName;

myName = "Babo"

printNewName();
