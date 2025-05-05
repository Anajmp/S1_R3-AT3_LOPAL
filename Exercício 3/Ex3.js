const numero = parseInt(prompt("Digite um número para exibir a tabuada de 1 a 10:"));

if (!isNaN(numero)) {
  let total = "";

  for (let i = 1; i <= 10; i++) {
    total += numero + " x " + i + " = " + (numero * i) + " // ";
  }

  alert("A tabuada do " + numero + ": " + total); //Irá alertar a tabuada completa, definida na linha 7, do número digitado
} else {
  alert("Você não digitou um número válido");
}