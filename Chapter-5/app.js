var num1 = 3
var num2 = 5
var result = num1 + num2
document.write("Sum of 3 and 5 is ", result, '<br>')
var num3 = 3
var num4 = 5
var result2 = num3 - num4
document.write("Sub of 3 and 5 is", result2, '<br>')
var num5 = 3
var num6 = 5
var result3 = num5 * num6
document.write("Multiple of 3 and 5 is ", result3, '<br>')
var num7 = 3
var num8 = 5
var result4 = num7 / num8
document.write("Division of 3 and 5 is ", result4, '<br>')
var num9 = 3
var num10 = 5
var result5 = num9 % num10
document.write("Modulus of 3 and 5 is ", result5, '<br>')

document.write("<br><br>");
var number;
document.write('Value after variable declaration is ', number, '<br>')
number = 5
document.write('Initial value : ', number, '<br>')
number++
document.write('Value after Increment is : ', number, '<br>')
var addNumber = number + 7
document.write('Value after Addition is : ', addNumber, '<br>')
addNumber--
document.write('Value after Decreament is : ', addNumber, '<br>')
var divideNumber = addNumber / 3
var remainder = divideNumber % 4
document.write('The remainder is : ', remainder, '<br>')
var cost_of_ticket = 600
totalCost = cost_of_ticket * 5
document.write('Total Cost to buy 5 tickets of a movie is ', totalCost, 'PKR', '<br>')

document.write("<br><br>");
document.write('Table of 2', '<br>')
var tableof2 = 2
document.write('2X1 = ', tableof2, '<br>')
tableof2 = 2 * 2
document.write('2X2 = ', tableof2, '<br>')
tableof2 = 3 * 2
document.write('2X3 = ', tableof2, '<br>')
tableof2 = 4 * 2
document.write('2X4 = ', tableof2, '<br>')
tableof2 = 5 * 2
document.write('2X5 = ', tableof2, '<br>')
tableof2 = 6 * 2
document.write('2X6 = ', tableof2, '<br>')
tableof2 = 7 * 2
document.write('2X7 = ', tableof2, '<br>')
tableof2 = 8 * 2
document.write('2X8 = ', tableof2, '<br>')
tableof2 = 9 * 2
document.write('2X9 = ', tableof2, '<br>')
tableof2 = 10 * 2
document.write('2X10 = ', tableof2, '<br>')


document.write("<br><br>");

var celsius = 25;
var fahrenheit = (celsius * 9) / 5 + 32;
document.write(celsius + "°C is " + fahrenheit + "°F", "<br>");
var fahrenheit = 77;
var celsius = ((fahrenheit - 32) * 5) / 9;
document.write(fahrenheit + "°F is " + celsius + "°C", "<br>");
document.write("<br><br>");
var h1 = document.createElement("h1")
h1.textContent = "Shopping Cart"
document.body.appendChild(h1)
var priceItem1 = 650
var quantityItem1 = 3
var totalPriceItem1 = priceItem1 * quantityItem1
var priceItem2 = 100
var quantityItem2 = 7
var totalPriceItem2 = priceItem2 * quantityItem2
var shipCharge = 100
var totalPriceItem2 = priceItem2 * quantityItem2
document.write(' Price of Item1 is ', priceItem1, '<br>')
document.write(' Quantity of Item1 is', quantityItem1, '<br>')
document.write(' Price of Item2 is ', priceItem2, '<br>')
document.write(' Quantity of Item2 is', quantityItem2, '<br>')
document.write(' Shipping charges is', shipCharge, '<br>')
var totalCostOfOrder = totalPriceItem1 + totalPriceItem2 + shipCharge
document.write('Total cost of your order is ',totalCostOfOrder )

document.write("<br><br>");
var h1 = document.createElement("h1")
h1.textContent = "Marksheet"
document.body.appendChild(h1)
document.write("<br>");
var totalMarks =  980
document.write("Total Marks = ",totalMarks ,'<br>')
var marksObtained = 804
document.write(" Marks Obtained = ", marksObtained ,'<br>')
var percent = marksObtained/totalMarks*100
document.write("percentage = " ,percent ,"%")
document.write("<br><br>");
var h1 = document.createElement("h1")
h1.textContent = "Currency In PKR"
document.body.appendChild(h1)
var currency = 10*104.80+25*28
document.write("Total Currency in PKR = " ,currency, '<br>')
document.write("<br><br>");
var numRand = 2
var resultRand = numRand+5*10/2
document.write("result = ",resultRand)
document.write("<br><br>");
var h1 = document.createElement("h1")
h1.textContent = "Age Calculator"
document.body.appendChild(h1)
document.write("<br>");
var currentYear = 2024
document.write("Current Year = " ,currentYear, '<br>')
var birthYear = 1992
document.write("Yor Birth Year = " ,birthYear, '<br>')
var age = currentYear - birthYear
document.write("Yor Age = " ,age, '<br>')
document.write("<br>");
var h1 = document.createElement("h1")
h1.textContent = "Geometrizer"
document.body.appendChild(h1)

var rad = 20
document.write('Radius = ',rad , '<br>')
var cir = 2*3.142*rad
document.write('Circumference of a circle  = ',cir , '<br>')
var area = 3.142*(rad*rad)
document.write('Area of a circle  = ',area , '<br>')

document.write("<br><br>");
var h1 = document.createElement("h1")
h1.textContent = "The Lifetime Supply Calculator"
document.body.appendChild(h1)
var favSnack = 'cheetos'
var curAge = 18
var maxAge = 25
var estAmount = 2
document.write(' Favourite Snack  = ',favSnack, '<br>')
document.write('Current age  = ', curAge, '<br>')
document.write('Maximum age  = ',  maxAge, '<br>')
document.write('Estimated Amount  = ', estAmount, '<br>')
document.write("You will need ",(maxAge-curAge)*365*estAmount, ' cheetos to last you until the ripe young age of 25')