// Reversed string bez built in metoda:

function revString(str) {
  let reversed = "";

  for (let letter of str) {
    // console.log(letter); // Vraca svako slovo;
    reversed = letter + reversed;
  }
  return reversed;
  //   for (let i = str.length - 1; i >= 0; i--) {
  //     reversed = reversed + str[i];
  //   }
  // return reversed;
}

// console.log(revString("Davud Carovac"));

// Swap two strings without using a third variable

let a = "Pet";
let b = "Deset";
console.log(a, b);
[a, b] = [b, a];

// console.log(a);
// console.log(b);

// Fibonacci array

const fibonacciArr = [0, 1];

function fibArray(length) {
  for (let i = 2; i <= length; i++) {
    fibonacciArr.push(fibonacciArr[i - 1] + fibonacciArr[i - 2]);
  }
  return fibonacciArr;
}

// console.log(fibArray(7));

// Biggest and smallest

function minMax(arr) {
  let min = arr[0];
  let max = arr[0];

  for (let i = 0; i <= arr.length - 1; i++) {
    if (min > arr[i]) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return [min, max];
}

console.log(minMax([12, 43, 2, 54]));
