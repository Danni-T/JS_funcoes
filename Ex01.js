/* Crie um script em que o usuário digitará a nota da prova, 
a nota do trabalho e a nota da lista de exercícios e apresente 
se ele foi aprovado, reprovado ou exame. 
A média para aprovação é 7. 
Caso a media fique entre 4 e 6.9 ele está de exame. 
Caso contrário está reprovado. 
Utilize funções com parâmetros e com retorno. 
Para o calculo da média ponderada considere: 
70% para prova; 20% para trabalho e 10% para lista de exercícios. */

function mediaNotas(prova, trabalho, lista) {
    var media = (prova * 0.7) + (trabalho * 0.2) + (lista * 0.1);
    return media;
}

function situacao(media) {
    if (media >= 7) {
        return "Aprovado";
    } else if (media >= 4 && media < 7) {
        return "Exame";
    } else {
        return "Reprovado";
    }
}

function notas() {
    var prova, trabalho, lista, mediaFinal, resultado;

    prova = parseFloat(prompt("Informe a nota da prova:"));
    trabalho = parseFloat(prompt("Informe a nota do trabalho:"));
    lista = parseFloat(prompt("Informe a nota da lista de exercícios:"));

    mediaFinal = mediaNotas(prova, trabalho, lista);
    resultado = situacao(mediaFinal);

    alert("Média final: " + mediaFinal.toFixed(2) + "\nSituação: " + resultado);
}
