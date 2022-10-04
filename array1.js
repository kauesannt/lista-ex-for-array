//Programa para calcular média de notas Média minima 7
//Entradas: Qualquer quantidade de notas
//Calcular média das notas e se foi aprovado ou não


let notas = []
let nNotas = Number(prompt('Quantos exames teve este semestre'))
let somatoria = 0
let media = 0


for (let i = 0; i < nNotas; i++) {
  notas[i] = Number(prompt(`Digite a nota Nº ${i + 1}:`))
  somatoria = somatoria + notas[i]
}

media = somatoria / nNotas

console.log(`Sua média foi: ${media}`)