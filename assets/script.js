// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowercaseCharacters = [
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
var uppercaseCharacters = [
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
var specialCharacters = [
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
var numberCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Need to have prompt asking how many characters for password (8-128)
//    if statement to determine whether answer was <8 or >128
// Need prompt to ask would you like to include LC,UC,SC,NUM (yes or no)
//     if statement to determine if < 1 was selected as yes
// write function to make string:
//
//      Figure out which types were selected as true from array housing confirm prompt input
//      Then run loop stating
//      division count will be number to take from each of the characters arrays

// function to handle selecting character types user selects and output string
function buildPassword(
  isLowercase,
  isUppercase,
  isNumber,
  isSpecial,
  characterCount
) {
  var combinedArray = [];
  var conditions = [isLowercase, isUppercase, isNumber, isSpecial];
  var conditionsCount = 0;

  for (i = 0; i < conditions.length; i++) {
    console.log(conditions[i]);
    if (conditions[i]) {
      conditionsCount++;
    }
  }
  // divisionCount is number of characters to take from each array of characters
  var divisionCount = characterCount / conditionsCount;
  var isDecimal = divisionCount % 1 < 0;
  var totals = [];
  // var isDecimalGreater = divisionCount % 1 >= .25;

  if (isDecimal) {
    Math.floor(divisionCount) + 1;
    console.log(divisionCount);
  }
  // if (conditionsCount >= 3) {
  //   Math.floor(divisionCount) - 1;
  // }

  // if (isDecimalGreater) {
  //   Math.floor(divisionCount) - 1;
  // }
  // divisionCount

  console.log("conditionsCount", conditionsCount);
  console.log("characterCount", characterCount);
  console.log(characterCount / conditionsCount);

  // if statements to verify the type was selected (true) then selecting a random variable in that array and looping that as many times as the division count. Then combined it (push) to empty array.
  if (isLowercase) {
    for (i = 0; i < divisionCount; i++) {
      var randomLowercaseChar = Math.floor(
        Math.random() * (lowercaseCharacters.length - 1)
      );
      combinedArray.push(lowercaseCharacters[randomLowercaseChar]);
    }
  }
  if (isUppercase) {
    for (i = 0; i < divisionCount; i++) {
      var randomUppercaseChar = Math.floor(
        Math.random() * (uppercaseCharacters.length - 1)
      );
      combinedArray.push(uppercaseCharacters[randomUppercaseChar]);
    }
  }
  if (isNumber) {
    for (i = 0; i < divisionCount; i++) {
      var randomNumberChar = Math.floor(
        Math.random() * (numberCharacters.length - 1)
      );
      combinedArray.push(numberCharacters[randomNumberChar]);
    }
  }
  if (isSpecial) {
    for (i = 0; i < divisionCount; i++) {
      var randomSpecialChar = Math.floor(
        Math.random() * (specialCharacters.length - 1)
      );
      combinedArray.push(specialCharacters[randomSpecialChar]);
    }
  }
  // function to shuffle combinedArray (Fisher-Yates Shuffle)
  function shuffle(combinedArray) {
    var i = combinedArray.length,
      j,
      temp;
    while (--i > 0) {
      j = Math.floor(Math.random() * (i + 1));
      temp = combinedArray[j];
      combinedArray[j] = combinedArray[i];
      combinedArray[i] = temp;
    }
  }
  shuffle(combinedArray);
  var passwordFinal = combinedArray.join("");
  console.log(passwordFinal.length);
  return passwordFinal;
}

// if (isLowercase) {
//   // meet conditions entered by user
//   var randomLowercaseChar =
//     Math.floor(Math.random()) * (lowercaseCharacters.length - 1);
//   // selects random number in array based on length on variable's array
//   combinedArray.push(lowercaseCharacters[randomLowercaseChar]);
// }
// // pushes that random value from array onto combinedArray

// if (isUppercase) {
//   var randomUppercaseChar =
//     Math.floor(Math.random()) * (uppercaseCharacters.length - 1);
//   combinedArray.push(uppercaseCharacters[randomUppercaseChar]);
// }

// if (isNumber) {
//   var randomNumberChar =
//     Math.floor(Math.random()) * (numberCharacters.length - 1);
//   combinedArray.push(numberCharacters[randomNumberChar]);
// }

// if (isSpecial) {
//   var randomSpecialChar =
//     Math.floor(Math.random()) * (specialCharacters.length - 1);
//   combinedArray.push(specialCharacters[randomSpecialChar]);
// }

// var fillerCharacterCount = characterCount - combinedArray.length;
// console.log(fillerCharacterCount);
// for (var i = 0; i < fillerCharacterCount; i++) {
//   console.log(i);

// }

// // push creates combined array,
// // array will only have as many characters as types selected
// //
// //
// // combinedArray holds random characters,
// // 2. add filler characters based on characterCount
// // loop is based on characterCount aka i
// //  then turn that array into a string
// //

function generatePassword() {
  // Prompt to select how many characters password will be
  var characterCount = window.prompt(
    "How many characters would you like your password to be? (Must be between 8 and 128 characters)"
  );
  // if statement makes sure user types in a number between 7 and 129
  if (!(isNaN(characterCount) || characterCount < 8 || characterCount > 128)) {
    // prompts to select character types
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
    // if statement makes sure user selects at least one character type
    if (isLowercase || isUppercase || isNumber || isSpecial) {
      //return function to handle building password from character types user selects
      return buildPassword(
        isLowercase,
        isUppercase,
        isNumber,
        isSpecial,
        characterCount
      );
    } else {
      window.alert("Please select at least one character type.");
    }
  } else {
    window.alert("Please enter a number between 8 and 128");
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
