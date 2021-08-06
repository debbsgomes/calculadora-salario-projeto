var inputHoras = document.querySelector('#valor-hora')
var inputProjeto = document.querySelector('#horas-projeto')

var resultado = document.querySelector('span')

function calcular(){
    var valorHora = inputHoras.valueAsNumber
    var horasProjeto = inputProjeto.valueAsNumber

    var valorProjeto = (valorHora * horasProjeto).toFixed(2)

    resultado.textContent = 'R$ ' + valorProjeto
}