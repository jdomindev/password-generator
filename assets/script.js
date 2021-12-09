// Assignment Code
var generateBtn = document.querySelector("#generate");

const lowercaseCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
const uppercaseCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
const specialCharacters = [
  "!",
  '"',
  "#",
  "$",
  "%",
  "&",
  "'",
  "(",
  ")",
  "*",
  "+",
  ",",
  "-",
  ".",
  "/",
  ":",
  ";",
  "<",
  "=",
  ">",
  "?",
  "@",
  "[",
  "\\",
  "]",
  "^",
  "_",
  "`",
  "{",
  "|",
  "}",
  "~",
];
const numberCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Need to have prompt asking how many characters for password (8-128)
//    if statement to determine whether answer was <8 or >128
// Need prompt to ask would you like to include LC,UC,SC,NUM (yes or no)
//     if statement to determine if < 1 was selected as yes
// Figure out which types were selected
//      use those variables to concat arrays into random string
function buildPassword(isLowercase, isUppercase, isNumber, isSpecial, characterLength) {
// 0. declare string variable var = password
// if (isLowercase) meet conditions entered by user
// const randomLowercaseChar = math.floor(Math.random()) * (lowercaseCharacters.length - 1)
// password.push(lowercaseCharacters[randomLowercaseChar])

// if (isUppercase) meet conditions entered by user
// const randomUppercaseChar = math.floor(Math.random()) * (uppercaseCharacters.length - 1)
// password.push(uppercaseCharacters[randomUppercaseChar])

// if (isNumber) meet conditions entered by user
// const randomNumberChar = math.floor(Math.random()) * (numbersCharacters.length - 1)
// password.push(numberCharacters[randomNumberChar])

// if (isSpecial) meet conditions entered by user
// const randomSpecialChar = math.floor(Math.random()) * (specialCharacters.length - 1)
// password.push(specialCharacters[randomSpecialChar])

// 2. add filler characters based on characterCount and passwordLength

// 3. var arrayIndex = math.floor(Math.random) * lowercaseCharacters.length
// 4. 
}



function generatePassword() {
  var characterCount = window.prompt(
    "How many characters would you like your password to be? (Select a number between 8 and 128 characters)"
  );
  if (!(isNaN(characterCount) || characterCount < 8 || characterCount > 128)) {
    var isLowercase = window.confirm(
      "Would you like to include lowercase characters?"
    );
    var isUppercase = window.confirm(
      "Would you like to include uppercase characters?"
    );
    var isNumber = window.confirm("Would you like to include numbers?");
    var isSpecial = window.confirm(
      "Would you like to include special characters?"
    );
    if (
      isLowercase ||
      isUppercase ||
      isNumber ||
      isSpecial 
    ) {
      return buildPassword(isLowercase, isUppercase, isNumber, isSpecial);
    } else {
      console.log("Please select at least one character type.");
      // change to alert
    }
  } else {
    console.log("Please enter a number between 8 and 128");
    // change to alert
  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
