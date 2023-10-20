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
// console.log(a, b);
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

// console.log(minMax([12, 43, 2, 54]));

// function(2,5) === 5 function(2)(5) === 5

function sum(x) {
  if (arguments.length === 2) {
    return arguments[0] + arguments[1];
  } else {
    return function (y) {
      return x + y;
    };
  }
}

// console.log(sum(2, 4));
// console.log(sum(2)(4));

// arguments vs parameters

const f = function (a, b, r, g, e) {
  if (f.length === arguments.length) {
    console.log(true);
  } else {
    console.log(false);
  }
};

// f(21, 32, 43); // False
// f(21, 32, 43, 93, 53); // True
// f(21); // False
// f(21, 32, 43, 93, 53, 239); // False

// Promise example

const isEntrenceFree = async (age) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (age <= 12) {
        resolve("Entrance is free.");
      } else {
        reject("Sorry, entrance is not free.");
      }
    }, 2000);
  });
};

// isEntrenceFree(15)
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error));

// Ne znam ni ja

function mutation(arr) {
  let firstItem = arr[0].toLowerCase();
  let secondItem = arr[1].toLowerCase();

  for (var i = 0; i <= secondItem.length; i++) {
    if (firstItem.indexOf(secondItem[i]) === -1) {
      return false;
    }
    return true;
  }
}
// console.log(mutation(["Alabama", "Boma!"]));

// Is string palindrome

const isPalindrome = (str) => str === str.split("").reverse().join("");
// console.log(isPalindrome("anavolimilovana"));

// String exist in another

function strInAnother(str, word) {
  let splitted = str.split(" ");

  // return str.toLowerCase().includes(word.toLowerCase());
  for (let i = 0; i <= splitted.length; i++) {
    if (splitted[i].toLowerCase() === word.toLowerCase()) {
      return true;
    }
    return false;
  }
}

// console.log(strInAnother("Davud ima 19 godina i 65 kila.", "davud"));

function foo() {
  let x = (y = 0);
  x++;
  y++;
  return x;
}

// console.log(foo(), typeof x, typeof y);

// Get middle items of string.

const getMiddle = (str) => {
  let middle = str.length / 2;
  if (str.length % 2 === 0) {
    return str[middle - 1] + str[middle];
  } else {
    let middle2 = str.length - 1;
    return str[middle2 / 2];
  }
};

console.log(getMiddle("aw"));
