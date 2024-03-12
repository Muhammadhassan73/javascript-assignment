
var ch = prompt("Enter a character: ");
if (ch >= "A" && ch <= "Z") {
  alert("It is an uppercase letter.");
} else if (ch >= "a" && ch <= "z") {
  alert("It is a lowercase letter.");
} else if (ch >= "0" && ch <= "9") {
  alert("It is a digit.");
} else {
  alert("It is a special character.");
}


let num1 = +prompt('Enter the first number') ;
let num2 = +prompt('Enter the second number') ;
if (num1>num2) {
    console.log('num1 is larger than num2 : ' + num1);

}else if(num2>num1){

    document.write('num2 is larger than num1 : ' + num2)

}
else{
    document.write('both numbers are equal');

}
let userInput = +prompt('Enter any number')
if (userInput>0) {
    document.write('Your number is positive' );

}
else if (userInput<0) {
    document.write('Your number is negative' );
}
else if (userInput===0) {
    document.write('Your number is equals to zero' );
}
else{
    document.write('Invalid number');

}

let userPasskey = prompt("Enter the valid password");
let passKey = "batman001";
if (userPasskey == null) {
  alert("Please enter your password");
  userPasskey = prompt("Enter the valid password");
  if (userPasskey === passKey) {
    document.write(
      "Correct! The password you entered matches the original password."
    );
  } else {
    document.write("Incorrect password");
  }
} else if (userPasskey === passKey) {
  document.write(
    "Correct! The password you entered matches the original password."
  );
} else {
  document.write("Incorrect password");
}
var greeting;
var hour = 13;
if (hour < 18) {
greeting = "Good day";
}
else{
greeting = "Good evening";
}
document.write(greeting)

let time = prompt('Enter time in 24 hours format')
if (time >= 0 &&  time<1200) {
    alert('Good morning!')
}
else if (time >= 1200 &&  time<1700) {
    alert('Good afternoon!')
}
else if (time >= 1700 &&  time<2100) {
    alert('Good evening!')
}
else if (time >= 2100 &&  time<2359) {
    alert('Good night!')
}
else{
    alert('Invalid time')
}
