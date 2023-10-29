/*Here are the function
1. (completed above) Define a function, as a function declaration, maxOfTwoNumbersthat takes two numbers as arguments and returns the largest of them. If they are the same, return that number. Use the if-else construct or a ternary expression - the Math.max method is not allowed.
*/

2.//Define a function, as a function expression, maxOfThreethat takes three numbers as arguments and returns the largest of them. Again, the Math.max method is not allowed. 

let maxOfThreethat = function (a,b,c){
    return (a > b ? (a > c ? a : c) :(b >  c ? b : c));
};

result = maxOfThreethat(10,14,80);
console.log("The Largest Number is:",  result);



3//Define a function, as a function declaration, isCharAVowelthat takes a character as an argument and returns true if it is a vowel, false otherwise.

function isCharAVowelAt (char) {
 
  if (char === 'a'||'e'||'i'||'o'||'u') {
      return "The character is a Vowel";
  }
  else {
  return "The character is not a vowel";
  }
}
     console.log(isCharacterAVowelat("e"))
    


4.//Define a function, as a function expression, sumArraythat takes an array of numbers and returns the sum of those numbers. For example, sumArray([2, 4, 5]);would return 11.
// create array with 10 numbers
//2. declare array
//3. create variable container to store sum, initial tht container.
//loop over each item in the array
    let sumArray = [12, 5, 2, 3, 7, 9, 8, 7, 6, 10];
    let sum = 0;

    for(let i = 0; i <= sumArray.length; i++){
      sum+= sumArray[i];
    }
    console.log(sum);


  // or more "elegantly" using the fantastic ternary expression!
  // return  x >= y ? x : y;

5.//Define a function, as a function declaration, multiplyArraythat takes an array of numbers and returns the product those numbers. For example, multiplyArray([2, 4, 5]);would return 40.
  
6. //Define a function, as a function expression, numArgsthat returns the number of arguments passed to the function when called
let numArgsthat = function(){
  return arguments.length;
};
console.log(numArgsthat(1,2,3,4,5,6));



 7.//Define a function, as a function declaration, reverseStringthat takes a string, reverses the characters, and returns it. For //example, reverseString('rockstar');would return the string "ratskcor".
 
  // return a new array of strings
  const arrayStrings = str.split("");
         
  // reverse the new created array elements
  const reversingArray = arrayStrings.reverse();
       
  // join all elements of the array into a string
  const joinArray = reversingArray.join("");
          
  // return the reversed string
  return joinArray;

console.log(reversingString('Hello'));
       
// taking input from the user
//const string = prompt('Enter a string: Journey');
      
const result = reversingString(string);
console.log(result);

//Define a function, as a function declaration, multiplyArraythat takes an array of numbers and returns the product those numbers. For example, multiplyArray([2, 4, 5]);would return 40.



