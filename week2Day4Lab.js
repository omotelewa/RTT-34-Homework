//Write JavaScript code to display the following output using a while loop.

//10 20 30 40 50 60 70 80 90 100

num = 10;
while (num <= 100) {
  if (num % 10 == 0) {
    console.log(num);
  }
  num += 10;
}

console.log(
  "\n================================================================"
);

//Write a while loop that prints all numbers from 500 - 800 only if they are divisible by 4.

i = 500;

while (i <= 801) {
  if (i % 4 === 0) {
    console.log(i);
  }
  i++;
}
