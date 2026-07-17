let nome
let nota1
let nota2
let nota3
let media
let aprovado
let reprovado

nome = "Matheus"
nota1 = 5
nota2 = 2
nota3 = 5
media = 7 
aprovado = "Parabéns, voce foi aprovado"
reprovado = "Infelizmente voce foi reprovado"

if (media >= 7) {
    console.log(aprovado)
}
else if (media < 7) {
    console.log(reprovado)
}

media = (nota1 + nota2+ nota3) / 3


