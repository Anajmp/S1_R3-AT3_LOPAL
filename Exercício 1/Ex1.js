const num = parseInt(prompt("Digite um número para exibir todos os números de 1 até ele:")); // irá criar uma váriavel constante que seja um número inteiro

if (isNaN(num)|| num <= 1){ 
 alert  ("Erro: Você não digitou um número maior que 1");
} else {
     let ordem = "";

    for (let i = 1; i <= num; i+=1) {
        ordem = ordem +" "+ i
    }
    alert(ordem);
}