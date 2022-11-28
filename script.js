var characterLength = 128;
var choiceArr = [];

var specialChararr = ["!","@","#","$","%","*","-","?",".","/"]; 
var lowerCasearr=  ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCasearr= ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numbersarr = ["0","1","2","3","4","5","6","7","8","9"]; 

// Assignment Code
var generateBtn = document.querySelector("#generate");


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Write password to the #password input
function writePassword() { 
  var prompts = getPrompts();
  if(prompts) {
    var newpassword = makePassword();
    var passwordText = document.querySelector("#password");
  passwordText.value = newpassword;
}
  

}
function makePassword() { // logic for pw 
var password = "";
for (var i = 0; i < characterLength; i++) {
    var randomCharacter = Math.floor(Math.random() * choiceArr.length);
    password = password + choiceArr[randomCharacter];

}
return password;

}

function getPrompts(){ // prompts
   
  characterLength = parseInt(prompt("How long would you like this password to be? 8 -128 characters."));

  if (isNaN(characterLength) || characterLength < 8 || characterLength > 128) { 
    alert ("Length must be typed as a number and be at least 8 characters long, Try Again.");
    return false; 
  }

   if (confirm ("Would you like to have Numbers in this password ? ")){
    choiceArr = choiceArr.concat(numbersarr);
   }
   if (confirm ("Would you like have Lowercase letters in this password ? ")){
    choiceArr = choiceArr.concat(lowerCasearr);
   }
   if (confirm ("Would you like Uppercase letters in this password ? ")){
    choiceArr = choiceArr.concat(upperCasearr);
   }
   if (confirm ("Would you like Special Characters in this password ? ")){
    choiceArr = choiceArr.concat(specialChararr);
   }
   return true; 

  }
