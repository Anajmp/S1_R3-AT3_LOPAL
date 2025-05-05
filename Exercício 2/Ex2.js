let num = 0;
let soma = 0;

for (let i = 1; i <= 10; i += 1) { // Irá fazer com que a váriavel i seja entre 1 e 10 e no looping ir somando 1

    num = parseInt(prompt("Digite o número "+i+"° para soma-lo:"));

    if (isNaN(num) || num < 1) {
        alert("Erro: Você não digitou um número maior que 0");
    } else {
        soma += num;
    }

}

alert(soma);

