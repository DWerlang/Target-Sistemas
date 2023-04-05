function inverteString(string) {
    let novaString = "";
    for (let i = string.length - 1; i >= 0; i--) {

      novaString += string[i];
    }
    return novaString;
  }
  //retornar uma nova string que passou por um loop em que adiciona o ultimo caracter da string originaria
  //na string atual. 
  
  console.log(inverteString("uma frase qualquer"));