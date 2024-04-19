// Quetion 1

var multiArray = [[], [], []];

// Question 2

var multiArray = [
  [0, 1, 2, 3],
  [1, 0, 1, 2],
  [2, 1, 0, 1],
];

document.write(multiArray[0].join(" ") + "<br>");
document.write(multiArray[1].join(" ") + "<br>");
document.write(multiArray[2].join(" ") + "<br>");

document.write("<br>");
document.write("<br>");

// Question 3

for (let i = 1; i <= 10; i++) {
  document.write(i + "<br>");
}

document.write("<br>");
document.write("<br>");

// Question 4

var tableNumber = +prompt("Enter a number to show its multiplication table");
var tableLength = +prompt("Enter length of multiplication table");

document.write("Multiplication table of " + tableNumber + "<br>");
document.write("Length " + tableLength + "<br>");

for (let i = 1; i <= tableLength; i++) {
  document.write(tableNumber + " x " + i + " = " + tableNumber * i + "<br>");
}

document.write("<br>");
document.write("<br>");

// Question 5

var fruits = ["apple", "banana", "mango", "orange", "strawberry"];

for (let i = 0; i < fruits.length; i++) {
  document.write(fruits[i] + "<br>");
}

document.write("<br>");
document.write("<br>");

for (let i = 0; i < fruits.length; i++) {
  document.write("Element at index " + i + " is " + fruits[i] + "<br>");
}

document.write("<br>");
document.write("<br>");

// Question 6

document.write("Counting: ");
for (let i = 1; i <= 15; i++) {
  document.write(i + ", ");
}

document.write("<br>");

document.write("Reverse counting: ");
for (let i = 10; i >= 1; i--) {
  document.write(i + ", ");
}

document.write("<br>");

document.write("Even: ");
for (let i = 0; i <= 20; i += 2) {
  document.write(i + ", ");
}

document.write("<br>");

document.write("Odd: ");

for (let i = 1; i <= 20; i += 2) {
  document.write(i + ", ");
}

document.write("<br>");

document.write("Series: ");
for (let i = 2; i <= 20; i += 2) {
  document.write(i + "k, ");
}

document.write("<br>");
document.write("<br>");

// Question 7

var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var userSearch = prompt(
  "Welcome to ABC Bakery. What do you want to order sir/ma'am?"
);

var isFound = false;

for (let i = 0; i < A.length; i++) {
  if (userSearch.toLowerCase() === A[i]) {
    isFound = true;
    document.write(
      userSearch + " is available at index " + i + " in our bakery"
    );
  }
}

if (!isFound) {
  document.write(
    "We are sorry. " + userSearch + " is not available in our bakery"
  );
}

document.write("<br>");
document.write("<br>");

// Question 8

var A = [24, 53, 78, 91, 12];

var maxNumber = A[0];

for (let i = 1; i < A.length; i++) {
  if (A[i] > maxNumber) {
    maxNumber = A[i];
  }
}

document.write("Array items: " + A.join(", ") + "<br>");
document.write("The largest number is " + maxNumber);

document.write("<br>");
document.write("<br>");

// Question 9

var A = [24, 53, 78, 91, 12];

var minNumber = A[0];

for (let i = 0; i < A.length; i++) {
  const number = A[i];
  if (number < minNumber) {
    minNumber = number;
  }
}

document.write("Array items: " + A.join(", ") + "<br>");
document.write("The smallest number is " + minNumber);

document.write("<br>");
document.write("<br>");

// Question 10

for (let i = 1; i <= 100; i++) {
  if (i % 5 === 0) {
    document.write(i + ", ");
  }
}