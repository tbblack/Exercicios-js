const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1)) //isInteger retorna true ou false após verificação
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1+peso2)

console.log(media.toFixed(2)) // toFixed controla numeros depois da virgula
console.log(media.toString(2)) // convertendo em string. (" usando o 2 ele converte em binario com ponto flutuante")
console.log(typeof media) // Mostra o tipo do dado
console.log(typeof Number)// Number com ("N") maiusculo é uma função, e com ("N") minusculo é um tipo do dado
