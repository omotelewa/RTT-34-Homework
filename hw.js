/* 1.   Write an function that contains an if/else statement for the following requirements:
    - If student gets 80 or higher: console log  You did a good job
    - If students get 70 or above: console log Keep trying
     - If students get 60 or above: console log ehhhh
     - If students get 55 or above: console log Not to good
    - Any grade lower than 55 is Bad Grade But You'll Get Em Next Time
*/

   /* function grades(grade1) { 
        if(grade1 >= 80){
            console.log("you did a good job");
        }
        else if(grade1 >=70){
            console.log("keep trying");
        }
        else if(grade1 >=60){
            console.log("ehhhh");
        }
        else if(grade1 >=55){
            console.log("Not too good");
        }
        else{
            console.log("Bad grade but You'll get Em Next Time");
        }

    }
    grades(45)
*/

/* 2.   Write a function that prints out multiples of 10 up to a given input (argument)
*/
   

/* function multipleNumOfTens(input) {
 for (let number = 1; number <= input; number++) {
 if (number % 10 === 0) {
 console.log(number);
 }
 }
 }
 multipleNumOfTens(190);


/* 3.   Write a function that takes bill amount and item price and says how many quarters they'd get in return
*/

 function totalQuarters(billAmount, itemPrice) {
      return (billAmount - itemPrice) / 0.25;
  }
  console.log(totalQuarters(100, 75));

  
/*  4.  Write a function that prints out how many bills you would recieve in change after paying a certain amount.
   Return in as large denominations as possible. Parameters should be amount paid and amount cost.
*/ 

//state bill received 
//bill amount paid
//costAmount
//loop counter
function billsReceived(paidAmount, costAmount) {
var Counter = 0;

var exchange = paidAmount - costAmout; 
while (exchange > 0) {
    if (exchange >= 100) {
        
    }
}


/* 5.   Write a program that uses console.log to print all the numbers from 1 to 100 with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead. When you have that working, modify your program to print "FizzBuzz", for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).
*/

// create forloop starting 1 to 101
for(var num = 0; num <= 101; num ++){
  
    var NumThree = num % 3;
    var NumFive = num % 5;
    
    if((NumThree === 0) && (NumFive === 0)) 
        console.log( "FizzBuzz");
    
    else if(NumThree === 0)
      console.log( "Fizz");
    
    else if(NumFive === 0)
      console.log( "Buzz");
    
    else
      console.log( num );
  } 
}


