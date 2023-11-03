//2.Define a function, as a function expression, maxOfThreethat takes three numbers as arguments and returns the largest of them. Again, the Math.max method is not allowed.

let maxOfthree = function (x, y, z) {
  if ((x > y, x > z)) {
    return x;
  } else if (y > x && y > z) {
    return y;
  } else {
    return z;
  }
};
console.log(maxOfthree(10, 5, 4));

//3. Define a function, as a function declaration, isCharAVowelthat takes a character as an argument and returns true if it is a vowel, false otherwise
function isCharAVowel(char) {
  const vowels = ["a", "e", "i", "o", "u"];
  return vowels.includes(char);
}
console.log(isCharAVowel("f"));

//5. Define a function, as a function declaration, multiplyArray that takes an array of numbers and returns the product those numbers. For example, multiplyArray([2, 4, 5]);would return 40.

function multiplyArray(arr) {
  //function declaration, parameter with temp variable to hold mutiple
  let product = 1;
  for (let i = 0; i < arr.length; i++) {
    product *= arr[i];
  }
  return product;
}
console.log(multiplyArray([2, 4, 5]));

6; //Define a function, as a function expression, numArgsthat returns the number of arguments passed to the function when called
let numArgsthat = function () {
  return arguments.length;
};
console.log(numArgsthat(1, 2, 3, 4, 5, 6));

//7.Define a function, as a function declaration, reverseStringthat takes a string, reverses the characters, and returns it. For example, reverseString('rockstar');would return the string "ratskcor".
//using javascript builtin methods for this solution.

function reverseStringthat(str) {
  return str.split("").reverse().join("");
}
console.log(reverseStringthat("rockstar"));
