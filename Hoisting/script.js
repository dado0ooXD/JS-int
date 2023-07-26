// 1. Slucaj

// const sumConst = (a, b) => a + b


// console.log(`sumFunc(1, 2) => ${sumFunc(1, 2)}`);
// console.log(`sumConst(3, 4) => ${sumConst(3, 4)}`);


// function sumFunc(a, b) {
//     return a+b
// }

// U ovom slucaju sve radi kao kad je sumFunc bila iznad console logova i konzole nece da vrate error.



// 2. Slucaj



console.log(`sumFunc(1, 2) => ${sumFunc(1, 2)}`);
console.log(`sumConst(3, 4) => ${sumConst(3, 4)}`);


const sumConst = (a, b) => a + b

function sumFunc(a, b) {
    return a+b
}

// U ovom slucaju sumFunc ce da se ispise u konzoli, a sumConst ce da javi error zato sto je pozvana pre 
// definisanja.