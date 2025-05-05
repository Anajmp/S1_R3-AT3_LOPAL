let calc = 0;

for (let i = 1; i <= 5; i++) {
  const nota = parseFloat(prompt("Digite a nota " + i + ":"));

  if (!isNaN(nota) && nota >= 0 && nota <= 10) { //Define que as notas devem ter o valor entre 0 e 10
    calc += nota;
  } else {
    alert("Nota inválida, constatada como 0.");
  }
}

let mAritmética = calc / 5;
alert("A média das 5 notas é: " + mAritmética);