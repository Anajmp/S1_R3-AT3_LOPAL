const numero1 = parseInt(prompt("Escreva o primeiro número:"));
const numero2 = parseInt(prompt("Escreva o segundo número:"));

if (!isNaN(numero1) && !isNaN(numero2)) {
  let começo;
  let final;

  if (numero1 < numero2) {
    começo = numero1;
    final = numero2;
  } else {
    começo = numero2;
    final = numero1;
  }

  let numP = ""; //Irá definir a váriavel numP como uma string

  for (let i = começo; i <= final; i++) {
    if (i % 2 === 0) {
      numP += i + " ";
    }
  }

  alert("Números pares entre " + começo + " e " + final + ": " + numP);
} else {
  alert("Você digitou um número não válido.");
}