
2.//Define a function, as a function expression, maxOfThreethat takes three numbers as arguments and returns the largest of them. Again, the Math.max method is not allowed. 
let maxOfThreethat = function (a,b,c){
    return a+b+c;
};
console.log(maxOfThreethat(10,14,80));



3//Define a function, as a function declaration, isCharAVowelthat takes a character as an argument and returns true if it is a vowel, false otherwise.

    function isCharacterAVowelat(char){
    if(char === "a"||"e"||"i"||"o"||"u")
    {
      return true
    }
    else {
      return false
    }
    
     console.log(isCharacterAVowelat("i"))
    
}

3.//Define a function, as a function expression, sumArraythat takes an array of numbers and returns the sum of those numbers. For example, sumArray([2, 4, 5]);would return 11.
// create array with 10 numbers
//2. declare array
//3. create variable container to store sum, initial tht container.
//loop over each item in the array
    let sumArray = [12, 5, 2, 3, 7, 9, 8, 7, 6, 10];
    let sum = 0;

    //for loop
    for(let i = 0; i <= sumArray.length; i++){
      sum+= sumArray[i];
    }
    console.log(sum);


  // or more "elegantly" using the fantastic ternary expression!
  // return  x >= y ? x : y;
}


function reverseString(str) {
  // Step 1. Create an empty string that will host the new created string
  var newString = "";

  // Step 2. Create the FOR loop
  /* The starting point of the loop will be (str.length - 1) which corresponds to the 
     last character of the string, "o"
     As long as i is greater than or equals 0, the loop will go on
     We decrement i after each iteration */
  for (var i = str.length - 1; i >= 0; i--) { 
      newString += str[i]; // or newString = newString + str[i];
  }
  /* Here hello's length equals 5
      For each iteration: i = str.length - 1 and newString = newString + str[i]
      First iteration:    i = 5 - 1 = 4,         newString = "" + "o" = "o"
      Second iteration:   i = 4 - 1 = 3,         newString = "o" + "l" = "ol"
      Third iteration:    i = 3 - 1 = 2,         newString = "ol" + "l" = "oll"
      Fourth iteration:   i = 2 - 1 = 1,         newString = "oll" + "e" = "olle"
      Fifth iteration:    i = 1 - 1 = 0,         newString = "olle" + "h" = "olleh"
  End of the FOR Loop*/

  // Step 3. Return the reversed string
  return newString; // "olleh"
}
/*...
Here are the functions:

(completed above) Define a function, as a function declaration, maxOfTwoNumbersthat takes two numbers as arguments and returns the largest of them. If they are the same, return that number. Use the if-else construct or a ternary expression - the Math.max method is not allowed.
Define a function, as a function expression, maxOfThreethat takes three numbers as arguments and returns the largest of them. Again, the Math.max method is not allowed.
Define a function, as a function declaration, isCharAVowelthat takes a character as an argument and returns true if it is a vowel, false otherwise.
Define a function, as a function expression, sumArraythat takes an array of numbers and returns the sum of those numbers. For example, sumArray([2, 4, 5]);would return 11.
Define a function, as a function declaration, multiplyArraythat takes an array of numbers and returns the product those numbers. For example, multiplyArray([2, 4, 5]);would return 40.
Define a function, as a function expression, numArgsthat returns the number of arguments passed to the function when called.
Define a function, as a function declaration, reverseStringthat takes a string, reverses the characters, and returns it. For example, reverseString('rockstar');would return the string "ratskcor".
Define a function, as a function expression, longestStringInArraythat takes an array of strings as an argument and returns the length of the longest string.
Define a function, as a function declaration, stringsLongerThanthat takes an array of strings and a number as arguments; and returns an array of the strings that are longer than the number passed in. For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3);would return ["hello", "morning"].

*/