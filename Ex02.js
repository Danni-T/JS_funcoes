/*Crie um script com as seguinte funções: para receber um valor, verifica se é par ou impar.  */

function parImpar(numero) {
    if (numero % 2 === 0) {
        return "O número " + numero + " é PAR.";
    } else {
        return "O número " + numero + " é ÍMPAR.";
    }
}

var valor = parseInt(prompt("Digite um número:"));

var resultado = parImpar(valor); 

alert(resultado);
document.write("<h2>" + resultado + "</h2>");
