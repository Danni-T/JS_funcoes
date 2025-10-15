function convertert(celsius) {
    var fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit; // retorna o valor convertido
}

function conversao() {
    var celsius = parseFloat(prompt("Digite a temperatura em graus Celsius:"));
    
    var resultado = convertert(celsius); // chama a função correta
    alert(celsius + "°C equivalem a " + resultado.toFixed(2) + "°F");
}

// chama a função certa
conversao();
