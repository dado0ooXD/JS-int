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

// Solution 2
function reversed(str) {
  return str.split("").reduce((start, curr) => curr + start, "");
}
// console.log(reversed("Davud"));

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

// console.log(getMiddle("aw"));

// Is palindrome second solution

function isPalindrome2(str) {
  for (let i = 0; i < str.length; i++) {
    if (str[i].toLowerCase() !== str[str.length - 1 - i].toLowerCase()) {
      return false;
    }
    return true;
  }
}

// console.log(isPalindrome2("Anavolimilovana"));

// Is string balanced

function isStringBalanced(str) {
  const stack = [];

  for (let char of str) {
    if (char === "(") {
      stack.push(char);
    } else {
      const lastItem = stack.pop();
      if (lastItem !== "(") {
        return false;
      }
    }
  }

  if (stack.length !== 0) return false;

  return true;
}

// console.log(isStringBalanced("()"));

// Remove duplicates

// First solution with new Set
function removeDuplicates(arr) {
  return [...new Set(arr)];
}
// console.log(removeDuplicates([1, 1, 3, 4, 5, 5]));

// Second solution with object

function removeDuplicates2(arr) {
  const obj = {};

  for (let item of arr) {
    if (obj[item]) {
      obj[item]++;
    } else {
      obj[item] = 1;
    }
  }
  return Object.keys(obj);
}
// console.log(removeDuplicates(["Davud", "Davud", "Davud", "Nista"]));
// console.log(removeDuplicates([1, 2, 4, 5, 6, 6, 2]));

// Count vowels
function countVowels(str) {
  let count = 0;
  const vowels = ["a", "e", "i", "o", "u"];

  for (let i = 0; i < str.length; i++) {
    for (let item of str) {
      if (vowels.includes(item)) {
        count++;
      }
    }
    return count;
  }
}

// console.log(countVowels("aeiou")); // 5
// console.log(countVowels("Davud")); // 2

// Capitalize first character of word

function capitalizeFirst(str) {
  return str
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
}

// console.log(capitalizeFirst("hi my name is davud"));

// Most common character in string

// function mostCommonChar(str) {
//   const charMap = {};
//   let max = 0;
//   let maxChar = "";

//   for (let item of str.replace) {
//     if (charMap[item]) {
//       charMap[item]++;
//     } else {
//       charMap[item] = 1;
//     }
//   }

//   for (let key in charMap) {
//     if (charMap[key] > max) {
//       max = charMap[key];
//       maxChar = max;
//     }
//   }
//   return maxChar;
// }

// console.log(mostCommonChar("Davvvud"));

function fizzBuzz(num) {
  for (let i = 0; i < num; i++) {
    if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else {
      console.log(i);
    }
  }
}

// fizzBuzz(100);

// Anagram
