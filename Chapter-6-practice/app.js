// Solve the following questions

// • Write a loop to print numbers from 1 to 10.

// • Write a loop to print even numbers from 1 to 20.

// • Write a loop to print odd numbers from 1 to 15.

// • Write a loop to calculate and print the factorial of a number (let's say 5).

// • Write a loop to print the multiplication table of a number (let's say 7) up to 10.

// • Write a loop to print the Fibonacci series up to the 10th term. (The Fibonacci sequence is a type series where each number is the sum of the two that precede it. It starts from 0 and 1 usually. The Fibonacci sequence is given by 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, and so on.-10)

// • Write a loop to find and print the sum of digits of a number (let's say 123).

// Write a loop to print the reverse of a string (let's say "hello").

// • Write a loop to print the square of numbers from 1 to 10.

// • Write a loop to find and print the smallest element in an array (let's say [3, 7, 2, 9, 5]).

for (var i = 1; i <= 10; i++) {
    console.log(i);
  }
  
  for (var i = 2; i <= 20; i += 2) {
    console.log(i);
  }
  
  for (var i = 2; i <= 20; i += 2) {
    console.log(i);
  }
  
  for (var i = 1; i <= 15; i += 2) {
    console.log(i);
  }
  
  var factorial = 1;
  for (var i = 1; i <= 5; i++) {
    factorial *= i;
  }
  console.log(factorial);
  
  var number = 7;
  for (var i = 1; i <= 10; i++) {
    console.log(number + " * " + i + " = " + number * i);
  }
  
  var n = 10;
  var first = 0;
  var second = 1;
  console.log(first);
  console.log(second);
  for (var i = 2; i < n; i++) {
    var next = first + second;
    console.log(next);
    first = second;
    second = next;
  }
  
  var number = 123;
  var sum = 0;
  while (number > 0) {
    sum += number % 10;
    number = Math.floor(number / 10);
  }
  console.log(sum);
  
  for (var i = 1; i <= 10; i++) {
    console.log(i * i);
  }
  
  var array = [3, 7, 2, 9, 5];
  var smallest = array[0];
  for (var i = 1; i < array.length; i++) {
    if (array[i] < smallest) {
      smallest = array[i];
    }
  }
  console.log(smallest);
  for (var i = 1; i <= 10; i++) {
    console.log(i);
  }
  
  for (var i = 2; i <= 20; i += 2) {
    console.log(i);
  }
  
  for (var i = 2; i <= 20; i += 2) {
    console.log(i);
  }
  
  for (var i = 1; i <= 15; i += 2) {
    console.log(i);
  }
  
  var factorial = 1;
  for (var i = 1; i <= 5; i++) {
    factorial *= i;
  }
  console.log(factorial);
  
  var number = 7;
  for (var i = 1; i <= 10; i++) {
    console.log(number + " * " + i + " = " + number * i);
  }
  
  var n = 10;
  var first = 0;
  var second = 1;
  console.log(first);
  console.log(second);
  for (var i = 2; i < n; i++) {
    var next = first + second;
    console.log(next);
    first = second;
    second = next;
  }
  
  var number = 123;
  var sum = 0;
  while (number > 0) {
    sum += number % 10;
    number = Math.floor(number / 10);
  }
  console.log(sum);
  
  for (var i = 1; i <= 10; i++) {
    console.log(i * i);
  }
  
  var array = [3, 7, 2, 9, 5];
  var smallest = array[0];
  for (var i = 1; i < array.length; i++) {
    if (array[i] < smallest) {
      smallest = array[i];
    }
  }
  console.log(smallest);