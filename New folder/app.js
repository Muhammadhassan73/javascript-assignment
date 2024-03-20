var multiArray = [[], [], []];



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


for (let i = 1; i <=10 ; i++) {
document.write(i+ "<br>")
    
}

document.write("<br>");
document.write("<br>");


var userInput = prompt('Enter any number to display its table')
for (let i = 1; i <=15; i++) {
document.write(`${userInput} x ${i} = ${userInput*i} <br>`)
    
}
document.write("<br>");
document.write("<br>");


var fruits = ['apple','banana','orange','mango','strawberry']
for (let i = 0; i < fruits.length; i++) {
document.write(fruits[i]+ '<br>') ;
    
}
document.write("<br>");
for (let i = 0; i < fruits.length; i++) {
  document.write(`element at index ${i} is ${fruits[i]} <br>`)
    
}

document.write("<br>");
document.write("<br>");
document.write('<h1>'+ 'Counting'+ '</h1>')
for (let i = 1; i <= 15; i++) {
 document.write(i + ',')
    
}

document.write('<h1>'+ 'Reverse Counting'+ '</h1>')
for (let i = 10; i >= 1; i--) {
 document.write(i + ',')
    
}

document.write('<h1>'+ 'Even'+ '</h1>')
for (let i = 0; i <= 20; i+=2) {
 document.write(i + ',')
    
}


document.write('<h1>'+ 'Odd'+ '</h1>')
for (let i = 1; i <= 20; i+=2) {
 document.write(i + ',')
    
}


document.write('<h1>'+ 'Series'+ '</h1>')
for (let i = 2; i <= 20; i+=2) {
 document.write(i+'k' + ',')
    
}


document.write("<br>");
document.write("<br>");


var items = ['cake','applepie','chips','pastry']
var bakeryInput = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?")
var isFound = false
for (let i = 0; i < items.length; i++) {
   
    if (bakeryInput=== items[i]) {
    isFound = true
    document.write(`${bakeryInput} is available at index ${i} in our bakery` )
    }
    
}
if(!isFound){
    document.write(`We are sorry ${bakeryInput} is not available in our bakery` )
}



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


for (let i = 1; i <=20; i++) {
document.write(i*5+",")
    
}