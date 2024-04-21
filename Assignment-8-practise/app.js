// Q. Write a program that takes an array of numbers as input.
//  Double each even number in the array and remove all odd numbers.
//  Return the modified array.

function removeOdd(arr) {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
      const num = arr[i];
      if (num % 2 === 0) {
        newArr.push(num * 2);
      }
    }
    return newArr;
  }
  
  console.log(removeOdd([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
  
  // Q.Write a program to take password as an input from
  // user. The password must qualify these requirements:
  // a. It should contain alphabets and numbers
  // b. It should not start with a number
  // c. It must at least 6 characters long
  // If the password does not meet above requirements,
  // prompt the user to enter a valid password.
  // For character codes of a-z, A-Z & 0
  
  const password = prompt("Enter your password", "password");
  
  let isAtLeastSixCharacters = false;
  let startsWithNumber = false;
  let containsValidCharacters = false;
  
  if (password.length >= 6) {
    isAtLeastSixCharacters = true;
  }
  
  if (!isNaN(password[0])) {
    startsWithNumber = true;
  }
  
  for (let i = 0; i < password.length; i++) {
    const charCode = password.charCodeAt(i);
    if (
      (charCode >= 65 && charCode <= 90) ||
      (charCode >= 97 && charCode <= 122) ||
      (charCode >= 48 && charCode <= 57)
    ) {
      containsValidCharacters = true;
    }
  }
  
  if (!isAtLeastSixCharacters || startsWithNumber || !containsValidCharacters) {
    alert("Enter a valid password");
  }
  
  // Q.Write a program that takes two arrays of numbers as input and returns a new array
  //  containing only the elements that are present in both arrays.
  //  Use nested for loops to compare each element of the first array with each element of the second array.
  
  function commonElements(arr1, arr2) {
    const newArr = [];
    for (let i = 0; i < arr1.length; i++) {
      const item1 = arr1[i];
      for (let j = 0; j < arr2.length; j++) {
        const item2 = arr2[j];
        if (item1 === item2) {
          newArr.push(item1);
        }
      }
    }
    return newArr;
  }
  
  console.log(commonElements([1, 2, 3, 4, 5], [4, 5, 6, 7, 8]));
  
  // Q.Write a program that takes a number as input and checks whether it is a prime number or not.
  
  function isPrime(n) {
    let isPrime = true;
    if (n === 0 || n === 1) {
      return isPrime;
    }
    for (let i = 2; i <= n - 1; i++) {
      if (n % i === 0) {
        isPrime = false;
        break;
      }
    }
    return isPrime;
  }
  
  console.log(isPrime(7));
  console.log(isPrime(1));
  console.log(isPrime(4));
  console.log(isPrime(66));
  console.log(isPrime(71));
  
  // Q.Write a program that takes a nested array as input and flattens it into a single array.
  // For example, if the input is [[1, 2], [3, 4], [5, 6]], the output should be [1, 2, 3, 4, 5, 6].
  
  function flattenArray(arr) {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
      const item1 = arr[i];
      for (let j = 0; j < arr[i].length; j++) {
        const item2 = arr[i][j];
        newArr.push(item2);
      }
    }
    return newArr;
  }
  
  const testArr = [
    [1, 2],
    [3, 4],
    [5, 6],
  ];
  // console.log(testArr.flatMap((item) => item));
  console.log(flattenArray(testArr));v