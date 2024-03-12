let userInput = prompt('Enter City name')
let city = 'karachi'
if (userInput== city) {
    document.write('<h2>Welcome to city of lights</h2>')
} else {
    document.write('<h2>Farigh City</h2>')
}
let Input = prompt('Enter your gender')
let male = 'male'
if (Input==  male) {
    document.write('<h2>Good Morning Sir.</h2>')
} else {
    document.write('<h2>Good Morning Madam.</h2>')
}

let signalInput= prompt('Enter Signal Color')
let redColor = 'red'
let yellowColor = 'yellow'
let greenColor = 'green'
if (signalInput== redColor) {
    document.write('<h2>Must Stop.</h2>')
    
}
else if (signalInput== yellowColor) {
    document.write('<h2>Ready to move.</h2>')
    
}
else if (signalInput== greenColor) {
    document.write('<h2>Move now.</h2>')
    
}

let litreInput = prompt('How much fuel in your car remaining?')
litreInput = Number.parseInt(litreInput )
if (  litreInput>=0.25 ) {
    document.write('<h2>You are good to go.</h2>')
    
} else {
    document.write('<h2>Please refill the fuel in your car.</h2>')
}
var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}
var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}
var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
    alert("condition 2 is true");
    }
    if (++c < 14){
    alert("condition 3 is true");
    }
    if(c === 14){
    alert("condition 4 is true");
    }
    var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
if (true){
    alert("True");
    }
    if(false){
    alert("False");
}
if("car" < "cat"){
    alert("car is smaller than cat");
}
document.write('<h1>Marksheet</h1>')
var urdu = +prompt("Enter your obtained urdu marks");
var computer = +prompt("Enter your obtained computer marks");
var maths = +prompt("Enter your obtained maths marks");
var obtainedNumbers = urdu + computer +maths;
var totalNumbers = 300;
document.write(`<h2>Total : ${totalNumbers}</h2>`)
document.write(`<h2>Obtained : ${obtainedNumbers}</h2>`)
var percentage = obtainedNumbers / totalNumbers * 100;
if(percentage >= 80){
    document.write('<h2> Remarks : Excellent</h2>')
}else if(percentage >= 70){
    document.write('<h2> Remarks :Good</h2>')
}else if(percentage >= 60){
    document.write('<h2> Remarks :Your Need to improve</h2>')
}else if(percentage < 60){
    document.write('<h2> Remarks :Sorry</h2>')
}else{
    document.write("Numbers are not valid")
}
document.write(`<h2>percentage : ${percentage}</h2>`)


document.write('<h1>Guess Game</h1>')
let guess = +prompt('Enter any Number ranging from 1 to 10')
let secNum = 9
if (guess===secNum) {
    document.write('<h2>Bingo! Correct answer</h2>')
}
else if(guess===++secNum){
    document.write('<h2>Close enough to the correct answer</h2>')
}
else{
    document.write('<h2>Try again later.</h2>')
}

let num = prompt("write a number which is divisible by  3")
if( num%3==0){
    document.write("<h2>your num is divisible by  3</h2>")
}
else{
    document.write("<h2>your num is not divisible by 3</h2>")}

    let even = 2
    let evenInput = prompt("Enter any ever or odd number")
    if( evenInput%2==0){
        document.write("<h2>your num is even</h2>")
    }
    else{
        document.write("<h2>your num is odd</h2>")}


        let tempInput = prompt("Enter today's temperature")
        if (tempInput>=40) {
            document.write("<h2>“It is too hot outside.”</h2>")
        }
        else if(tempInput>=30){
            document.write("<h2>“The Weather today is Normal.”</h2>")
        }
        else if(tempInput>=20){
            document.write("<h2>“Today's Weather is cool.”</h2>")
        }
        else if(tempInput>=10){
            document.write("<h2>“OMG! Today’s weather is so Cool.”</h2>")
        }
        
        
        let num1 = parseFloat(prompt("Enter the first number: "));
        let num2 = parseFloat(prompt("Enter the second number: "));
        let operator = prompt("Enter the operation (+, -, *, /, %): ");
        
        let result = calculate(num1, num2, operator);
        document.write(`<h2>Result: ${result}</h2>`);
function calculate(num1, num2, operator) {
    if (operator === '+') {
        return num1 + num2;
    } else if (operator === '-') {
        return num1 - num2;
    } else if (operator === '*') {
        return num1 * num2;
    } else if (operator === '/') {
        if (num2 !== 0) {
            return num1 / num2;
        } else {
            return "Error: Division by zero!";
        }
    } else if (operator === '%') {
        if (num2 !== 0) {
            return num1 % num2;
        } else {
            return "Error: Modulo by zero!";
        }
    } else {
        return "Error: Invalid operator!";
    }
}