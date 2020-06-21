// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
// create object and place all characters as values
var passChar = {
  lower: "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z",
  upper: "A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z",
  numerical: "0,1,2,3,4,5,6,7,8,9",
  symbol: "!@#$%^&*(){}[]=<>/,.",
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword()
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// function to generate password
function generatePassword() {
  // add prompts to get values from user
  var charAmount = window.prompt("Please enter the number of characters for your password. The number needs to be between 8 and 128.");
  var lower = window.confirm("Do you want lowercase letters in your password?");
  var upper = window.confirm("Do you want uppercase letters in your password?");
  var numerical = window.confirm("Do you want numbers in your password?");
  var symbol = window.confirm("Do you want special characters in your password?");
  var passwordCheck = "";

  //check user input with if statements

     //check user input with if statements

     if (lower === true)  {
      passwordCheck += passChar.lower;
    };
  
    if (upper === true) {
        passwordCheck += passChar.upper;
    };
  
    if (numerical === true) {
        passwordCheck += passChar.numerical;
    };
  
    if (symbol === true) {
        passwordCheck += passChar.symbol;
    };
};



 