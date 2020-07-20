// Assignment Code
let generateBtn = document.querySelector("#generate");
let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let numbers = '0123456789';
let special = '!@#$%^&*()_+~<>?:"<>';

let charactersNumbers = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
let numbersSpecial = '0123456789!@#$%^&*()_+~<>?:"<>';
let charactersSpecial = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+~<>?:"<>'

let charNumSpec = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~<>?:"<>';

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");


  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword(){
  //get length of password
  let password = ' ';
  let upperLower;

  let length = prompt('Length of Password (8-128):');
  while(length > 128 || length < 8){
    alert('Please choose a a length from 8 to 128');
    length = prompt('Length of Password (8-128):');
  }

  //get character type
  let type = prompt('Choose Character Type: \n - character \n - numeric \n - special \n - character+special \n - character+numeric \n - numeric+special \n - character+special+numeric');
  while(type !== 'character' && type !== 'numeric' && type !== 'special' && type !== 'character+special' && type !== 'character+numeric' && type !== 'numeric+special' && type !== 'character+special+numeric'){
   type = prompt('Choose Character Type: \n - character \n - numeric \n - special \n - character+special \n - character+numeric \n - numeric+special \n - character+special+numeric');
  }

  //if type is a character prompt for upper or lowercase
  if(type === 'character' || type === 'character+special' || type === 'character+numeric' || type === 'character+special+numeric'){
    upperLower = prompt('uppercase or lowercase?');
    while(upperLower !== 'uppercase' && upperLower !== 'lowercase'){
      alert('please choose a type.');
      upperLower = prompt('uppercase or lowercase?');
    }
  }

  //generate password for character w/ uppercase
  if(upperLower === 'uppercase'){
    for(let i = 0; i < length; i++){
      password += characters.charAt(Math.floor(Math.random()* characters.length));
    }
  }

  //generate password for characters w/ lowercase
  if(upperLower === 'lowercase'){
    for(let i = 0; i < length; i++){
      password += characters.charAt(Math.floor(Math.random()* characters.length));
      password = password.toLowerCase();
    }
  }

  //generate password for numeric
  if(type === 'numeric'){
    for(let i = 0; i < length; i++){
      password += numbers.charAt(Math.floor(Math.random()* numbers.length));
    }
  }

  //generate password for special
  if(type === 'special'){
    for(let i = 0; i < length; i++){
      password += special.charAt(Math.floor(Math.random()* special.length));
    }
  }

  //generate password for charactersSpecial
  if(type === 'character+special'){
    for(let i = 0; i < length; i++){
      password += charactersSpecial.charAt(Math.floor(Math.random()* charactersSpecial.length));
    }
  }

    //generate password for charactersSpecial w/ lowercase
    if(type === 'character+special' && upperLower === 'lowercase'){
      for(let i = 0; i < length; i++){
        password += charactersSpecial.charAt(Math.floor(Math.random()* charactersSpecial.length));
        password = password.toLowerCase();
      }
    }

  //generate password for charactersNumbers
  if(type === 'character+numeric'){
    for(let i = 0; i < length; i++){
      password += charactersNumbers.charAt(Math.floor(Math.random()* charactersNumbers.length));
    }
  }

  //generate password for charactersNumbers w/ lowercase
  if(type === 'character+numeric' && upperLower === 'lowercase'){
    for(let i = 0; i < length; i++){
      password += charactersNumbers.charAt(Math.floor(Math.random()* charactersNumbers.length));
      password = password.toLowerCase();
    }
  }

  //generate password for charNumSpec
  if(type === 'character+special+numeric'){
    for(let i = 0; i < length; i++){
      password += charNumSpec.charAt(Math.floor(Math.random()* charNumSpec.length));
    }
  }

  //generate password for charNumSpec w/ lowercase
  if(type === 'character+special+numeric' && upperLower === 'lowercase'){
    for(let i = 0; i < length; i++){
      password += charNumSpec.charAt(Math.floor(Math.random()* charNumSpec.length));
      password = password.toLowerCase();
    }
  }

  //generate password for numbersSpecial
  if(type === 'numeric+special'){
    for(let i = 0; i < length; i++){
      password += numbersSpecial.charAt(Math.floor(Math.random()* numbersSpecial.length));
    }
  }

  return password;
}