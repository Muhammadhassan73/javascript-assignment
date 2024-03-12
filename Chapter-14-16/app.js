let studentName = [];
const studentsName = new Array()
let myName = ['Cellmon bhai','Atankwadi','Gian']
let numArray = [9,11]
let booleanArray = [true,false]
let mixArray = ['Shayan',0,true]


let qualifications = ['SSC','HSC', 'BCS','BS', 'BCOM', 'MS', 'M', 'Phi', 'PhD']
document.write('<h1>Qualifications</h1>')
document.write('<ol>')
for (let i = 0; i < qualifications.length; i++) {
    document.write('<li>'+ qualifications[i] + '</li>')
    
}


document.write('</ol>')
let studentsNames = ['Micheal', 'John','Tony Stark']
let studentsScores = [320,230,480]
for(let i=0; i<studentsNames.length; i++){
    document.write(`Score of ${studentsNames[i]} is. ${studentsScores[i]} Percentage ${(studentsScores[i]/500)*100} % <br>`)
}

let colorNames = ['Gray','Black','White']
document.write(colorNames , '<br>')
let ColorInput = prompt('What color you want to add in the to the beginning?')
let returnValue = colorNames.unshift(ColorInput)
document.write(colorNames,'<br>')
let endColor = prompt('What color you want to add in the to the end?')
let returnValue2 = colorNames.push(endColor)
document.write(colorNames,'<br>')
let updatedColor = colorNames.unshift('Jet-Black','Beige')
document.write(colorNames,'<br>')

colorNames.shift([0])
document.write(colorNames,'<br>')

colorNames.pop(colorNames.length)
document.write(colorNames,'<br>')

let index = +prompt('At which index you wants to add a color')
let newColor = prompt('What color you want to add ')

colorNames.splice(index,0,newColor)
document.write(colorNames,'<br>')

let newindex = +prompt('At which index you wants to delete a color')
let quantity = prompt('How many colors you want to delete')

colorNames.splice(newindex,quantity)
document.write(colorNames,'<br>')


let scoresOfStudents = [320,230,480,120]

    document.write('Scores of students : ', scoresOfStudents,'<br>')
scoresOfStudents.sort()
document.write('Ordered scores of students : ', scoresOfStudents,'<br>')


let cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
document.write('City list : ',cities ,'<br>' )
let selectedCities = cities.slice(2, 4);
document.write('selected cities : ',selectedCities ,'<br>')

let arr = ['This','is','my','cat']
document.write('Array : ', arr,'<br>')
let newString = arr.join(" ")
document.write('String : ', newString,'<br>')

let devices = [];
devices.push("keyboard");
devices.push("mouse");
devices.push("printer");
devices.push("monitor");
document.write("<h2>Devices:</h2>");
document.write("<p>" + devices.join(", ") + "</p>");
document.write("<h2>Out:</h2>");
document.write("<p>" + devices.shift() + "</p>");
document.write("<h2>Out:</h2>");
document.write("<p>" + devices.shift() + "</p>");
document.write("<h2>Out:</h2>");
document.write("<p>" + devices.shift() + "</p>");
document.write("<h2>Out:</h2>");
document.write("<p>" + devices.shift() + "</p>");




let newdevices = [];
newdevices.push("keyboard");
newdevices.push("mouse");
newdevices.push("printer");
newdevices.push("monitor");
document.write("<h2>Devices:</h2>");
document.write("<p>" + newdevices.join(", ") + "</p>");
document.write("<h2>Out:</h2>");
document.write("<p>" + newdevices.pop() + "</p>");
document.write("<h2>Out:</h2>");
document.write("<p>" + newdevices.pop() + "</p>");
document.write("<h2>Out:</h2>");
document.write("<p>" + newdevices.pop() + "</p>");
document.write("<h2>Out:</h2>");
document.write("<p>" + newdevices.pop() + "</p>");

var manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
document.write("<select>");
for (var i = 0; i < manufacturers.length; i++) {
  document.write("<option>" + manufacturers[i] + "</option>");
}
document.write("</select>");