// Define a function named makeid that generates a random string of specified length (l)
var num = document.querySelector("input#num")
var exibir = document.querySelector("div#res")

function makeid(l) {
  // Initialize an empty string named text to store the generated random string
  var text = "";
  
  // Define a character list containing uppercase letters, lowercase letters, and digits
  var char_list = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  // Iterate l times to generate each character in the random string
  for (var i = 0; i < l; i++) {
    // Append a randomly selected character from char_list to the text string
    text += char_list.charAt(Math.floor(Math.random() * char_list.length));
  }

  // Return the generated random string
  return text;
}

// Log the result of calling makeid with the parameter 8 to the console



function criarSenha(){
  exibir.innerText += makeid(Number(num.value))
}




 
