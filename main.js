document.getElementById('imcForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const alturaCm = parseFloat(document.getElementById('altura').value);
    const peso = parseFloat(document.getElementById('peso').value);

    const alturaMetros = alturaCm / 100;

    const imc = peso / (alturaMetros * alturaMetros);

    let classificacao = '';
    if (imc < 16) {
        classificacao = 'Baixo peso muito grave';
    } else if (imc >= 16 && imc <= 16.99) {
        classificacao = 'Baixo peso grave';
    } else if (imc >= 17 && imc <= 18.49) {
        classificacao = 'Baixo peso';
    } else if (imc >= 18.50 && imc <= 24.99) {
        classificacao = 'Peso normal';
    } else if (imc >= 25 && imc <= 29.99) {
        classificacao = 'Sobrepeso';
    } else if (imc >= 30 && imc <= 34.99) {
        classificacao = 'Obesidade grau I';
    } else if (imc >= 35 && imc <= 39.99) {
        classificacao = 'Obesidade grau II';
    } else {
        classificacao = 'Obesidade grau III';
    }

    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `${nome} possui índice de massa corporal igual a ${imc.toFixed(2)}, sendo classificado como: ${classificacao}.`;
});