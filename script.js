// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  function generatePassword() {
    var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    var lowercase = "abcdefghijklmnopqrstuvwxyz"
    var numbers = "0123456789"
    var special = "!@#$%^&*()"
    
    var passLength = window.prompt("How long do you want your password?");
    if (passLength > 128, passLength < 8) {
      window.alert("Has to be between 8 and 128 characters.")
    }
  console.log(passLength)
  
  let chars = "";
  
  if (confirm("would you like lowercase letters?") == true) {
    chars = (chars + lowercase)
} 

   if (confirm("Would you like uppercase letters?") == true) {
   chars = (chars + uppercase) 
   }
    

   if (confirm("would you like numbers?") == true) {
    chars = (chars + numbers)
   }
    

  if  (confirm("Would you like special characters?") == true) {
    chars = (chars + special)
  }
    
  console.log(chars)
  
 
    if (chars.length == 0) {
      window.alert("You need to have something in the password.")
    }
  
    
   console.log(chars.length)

   var password = ""

    for (var i = 0; i < passLength; i++) {
      var randomNumber = Math.floor(Math.random() * chars.length);
      password += chars.substring(randomNumber, randomNumber + 1);
    }console.log(password)
 passwordText.value=password
 
  }
}
       
var passwordText = document.querySelector("#password");

passwordText.value = password;



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);