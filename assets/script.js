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
  var password = window.prompt("Please select a character amount between 8 and 128");
  var password = generatePassword(passwordNumber);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


 