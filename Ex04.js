function lerNumero() { // renomeei a função para evitar conflito
    var n = parseInt(prompt("Digite a quantidade de termos da sequência de Fibonacci:"));
    return n; 
}

function fibonacci(n) {
    var termo1 = 0;
    var termo2 = 1;
    var proximo;

    var resultado = "Sequência de Fibonacci:\n";

    for (var i = 1; i <= n; i++) {
        resultado += termo1 + " ";
        proximo = termo1 + termo2;
        termo1 = termo2;
        termo2 = proximo;
    }

    alert(resultado); 
}

function iniciar() {
    var quantidade = lerNumero(); // chama a função correta
    fibonacci(quantidade);        // calcula e mostra a sequência
}

iniciar();
