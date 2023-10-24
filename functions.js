
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

    for(let i = 0; i <= sumArray.length; i++){
      sum+= sumArray[i];
    }
    console.log(sum);


  // or more "elegantly" using the fantastic ternary expression!
  // return  x >= y ? x : y;

5.//Define a function, as a function declaration, multiplyArraythat takes an array of numbers and returns the product those numbers. For example, multiplyArray([2, 4, 5]);would return 40.
  

 //7.//Define a function, as a function declaration, reverseStringthat takes a string, reverses the characters, and returns it. For //example, reverseString('rockstar');would return the string "ratskcor".
 function reversingString(str) {
        
  // return a new array of strings
  const arrayStrings = str.split("");
         
  // reverse the new created array elements
  const reversingArray = arrayStrings.reverse();
       
  // join all elements of the array into a string
  const joinArray = reversingArray.join("");
          
  // return the reversed string
  return joinArray;
}
       
// taking input from the user
const string = prompt('Enter a string: ');
      
const result = reversingString(string);
console.log(result);

//Define a function, as a function declaration, multiplyArraythat takes an array of numbers and returns the product those numbers. For example, multiplyArray([2, 4, 5]);would return 40.


// 1. create array
//total will hold value

function multiplyArraythat(){
let total = 1; 
for(let i = 0; i<arr.length;i++){
    total = total * array[i]
  }

return total;

}

console.log(multiplyArraythat([5,7,8,13,23,31]));

