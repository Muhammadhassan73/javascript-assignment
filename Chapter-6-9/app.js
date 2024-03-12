var h1 = document.createElement("h1")
h1.textContent = "Result"
document.body.appendChild(h1)

var a = 10 
document.write('The value of a is: ', a,'<br>')
++a
document.write('The value of ++a is: ', a ,'<br>')
document.write('Now the value of a is: ', a)
document.write('<br>','<br>')

document.write('The value of a++ is: ', a++ ,'<br>')

document.write('The value of a is: ', a ,'<br>')
document.write('<br>','<br>')
document.write('The value of --a is: ', --a ,'<br>')

document.write('The value of a is: ', a ,'<br>')
document.write('<br>','<br>')

document.write('The value of a-- is: ', a-- ,'<br>')
document.write('The value of a is: ', a ,'<br>')
document.write('<br>','<br>')
var a = 2, b = 1;
var result = --a - --b + ++b + b--;
document.write('result = ',result)
document.write('<br>')
document.write('--a = ','1','<br>' )
document.write('--a - --b = ','1','<br>')
document.write('--a - --b + ++b = ','2','<br>');
document.write('--a - --b + ++b + b-- = ','3','<br>');
var user = prompt("Enter your name")
alert('Hello '+ user)
document.write('<br>')
var userInput =  +prompt('Enter a number')
if (!isNaN(userInput)) {
    document.write(`1 x ${userInput} = ${1*userInput} <br>`)
    document.write(`2 x ${userInput} = ${2*userInput} <br>`)
    document.write(`3 x ${userInput} = ${3*userInput} <br>`)
    document.write(`4 x ${userInput} = ${4*userInput} <br>`)
    document.write(`5 x ${userInput} = ${5*userInput} <br>`)
    document.write(`6 x ${userInput} = ${6*userInput} <br>`)
    document.write(`7 x ${userInput} = ${7*userInput} <br>`)
    document.write(`8 x ${userInput} = ${8*userInput} <br>`)
    document.write(`9 x ${userInput} = ${9*userInput} <br>`)
    document.write(`10 x ${userInput} = ${10*userInput} <br>`)
    
} else {
    document.write(`1 x 5 = ${1*5} <br>`)
    document.write(`2 x 5 = ${3*5} <br>`)
    document.write(`4 x 5 = ${4*5} <br>`)
    document.write(`5 x 5 = ${5*5} <br>`)
    document.write(`6 x 5 = ${6*5} <br>`)
    document.write(`7 x 5 = ${7*5} <br>`)
    document.write(`8 x 5 = ${8*5} <br>`)
    document.write(`9 x 5 = ${9*5} <br>`)
    document.write(`10 x 5 = ${10*5} <br>`)
    
}
document.write('<br>')
let subject1Marks = 85;
let subject2Marks = 90;
let subject3Marks = 75;

let totalMarks = subject1Marks + subject2Marks + subject3Marks;
let percentage = (totalMarks / 300) * 100;

document.write("<h2>Mark Sheet</h2>");
document.write("<table border='1'>");
document.write("<tr><th>Subject</th><th>Marks</th></tr>");
document.write("<tr><td>Urdu</td><td>" + subject1Marks + "</td></tr>");
document.write("<tr><td>Computer</td><td>" + subject2Marks + "</td></tr>");
document.write("<tr><td>Maths</td><td>" + subject3Marks + "</td></tr>");
document.write("<tr><td>Total</td><td>" + totalMarks + "</td></tr>");
document.write("<tr><td>Percentage</td><td>" + percentage.toFixed(2) + "%</td></tr>");
document.write("</table>");