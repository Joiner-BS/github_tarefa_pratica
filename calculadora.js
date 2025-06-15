function calcularImc() {

    // Entrada de dados
    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value;

    //Processamento
    let imc = peso / (altura ^ 2);
    let numeroFormatado = imc.toFixed(2);

    //Saída
    document.getElementById("numeroFormatado").textContent =
        "Valor do IMC = " + numeroFormatado;

}