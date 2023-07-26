// 1. Slucaj

// const sumConst = (a, b) => a + b


// console.log(`sumFunc(1, 2) => ${sumFunc(1, 2)}`);
// console.log(`sumConst(3, 4) => ${sumConst(3, 4)}`);


// function sumFunc(a, b) {
//     return a+b
// }

// U ovom slucaju sve radi kao kad je sumFunc bila iznad console logova i console log za sumFunc nece da vrati error.
// Razlog zbog kog sumFunc radi je zbog hoistinga koji automatski podize funkcije definisane sa "function keywordom"
//  na vrh i izvrsava se sa vrha na dole i zbog toga funkcije koje su definisane sa "function" keywordom mogu da se 
// pozivaju pre inicijaliziranja.



// 2. Slucaj



console.log(`sumFunc(1, 2) => ${sumFunc(1, 2)}`);
console.log(`sumConst(3, 4) => ${sumConst(3, 4)}`);


const sumConst = (a, b) => a + b

function sumFunc(a, b) {
    return a+b
}

// U ovom slucaju sumFunc ce da se ispise u konzoli, a sumConst ce da javi error zato sto je pozvana pre 
// inicijaliziranja.