// Alert with instructions and reset password on page load
alert("INSTRUCTIONS: Make sure to input only numbers and that the total amount of uppercase and lowercase letters, symbols, and numbers add up to at least 8 but less than 128!")
document.getElementById("password").value = '';

// Assignment code here

//Define Arrays
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var lowerCase = upperCase.map(element => {
  return element.toLowerCase();
  });
var symbols = ['!', '$', '(', ')', '*', '^', '#', '@', '&', '+']
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '9']

//Empty array to store password
var passArr = []

//Get user input through generatePassword function
function generatePassword() {
  
  //Resets array
  passArr.length = 0;

  var uC = parseInt(prompt("How many uppercase letters do you want?"));
  if (isNaN(uC)) {
    alert("User input incorrect, please make sure to input numbers with a combined total of 8 letters, symbols, and numbers! Input defaulted to 0!")
    uC = 0;
  }
  var lC = parseInt(prompt("How many lowercase letters do you want?"));
  if (isNaN(lC)) {
    alert("User input incorrect, please make sure to input numbers with a combined total of 8 letters, symbols, and numbers! Input defaulted to 0!")
    lC = 0;
  }

  var num = parseInt(prompt("How many numbers do you want?"));
  if (isNaN(num)) {
    alert("User input incorrect, please make sure to input numbers with a combined total of 8 letters, symbols, and numbers! Input defaulted to 0!")
    num = 0;
  }

  var sym = parseInt(prompt("How many symbols do you want?"));
  if (isNaN(sym)) {
    alert("User input incorrect, please make sure to input numbers with a combined total of 8 letters, symbols, and numbers! Input defaulted to 0!")
    sym = 0;
  }

  var size = uC + lC + num + sym;

  if (size === 0 || size <= 7 || size >= 128) {
    alert("User input incorrect, please make sure to input numbers with a combined total of 8 letters, symbols, and numbers!")
    return ("Incorrect Input!")
  }
  else {
    for (let i = 0; i < uC; i++) {
      passArr.push(upperCase[Math.floor(Math.random() * upperCase.length)]);
    }
    for (let i = 0; i < lC; i++) {
      passArr.push(lowerCase[Math.floor(Math.random() * lowerCase.length)]);
    }
    for (let i = 0; i < num; i++) {
      passArr.push(numbers[Math.floor(Math.random() * numbers.length)]);
    }
    for (let i = 0; i < lC; i++) {
      passArr.push(symbols[Math.floor(Math.random() * symbols.length)]);
    }
  }
  
  var randomizedPass = randomize(passArr);

  return("Your secure password is: " + randomizedPass.join(''));
}

//Function to randomize password **Credit to W3docs for the function**
//**Website: https://www.w3docs.com/snippets/javascript/how-to-randomize-shuffle-a-javascript-array.html**

function randomize(arr) {
  let i = arr.length, randomIndex;

  while (i != 0) {
    randomIndex = Math.floor(Math.random() * i);
    i--;

    [arr[i], arr[randomIndex]] = [arr[randomIndex], arr[i]];
  }
  return arr;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  password = generatePassword();
  document.getElementById("password").value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
