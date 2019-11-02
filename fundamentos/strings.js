const escola = "Cod3r"

console.log(escola.charAt(4)) 
// retorna o caracter na posição X("no caso 4")

console.log(escola.charAt(5))
//se tentar mostrar o caracter na posição que não tem nadam retorna nada

console.log(escola.charCodeAt(3))
//retorna o valor do caracter dentro da tabela ASCII que esta na posição X("no caso 3")

console.log(escola.indexOf('3'))
//retorna o valor da posição que contem o valor especificado("no caso 3")

console.log(escola.substring(1))
// retorna a string da posição X pra frente

console.log(escola.substring(0, 3))
// retorna a string iniciando no primeiro valor até o segundo valor

console.log('Escola '.concat(escola).concat("!"))
// concatenar strings, pegando com aspas simples, duplas e valor dentro de variavel
// Literal é um valor que é usado sem estar armazenado em uma variavel EX: ('Escola') ou ("!")

console.log('Escola' + escola + "!")
// outra forma de concatenar, sem usar o concat
// usando o +, se for string ele concatena, mas se for number ele soma

console.log(escola.replace(3, 'e'))
// substituir o valor da posição 3 pelo e

console.log(escola.replace(/\w/g, 'e'))
// /\w/g expressão regular, substitua todos os digitos do texto pela letra 'e'

console.log('Ana,Maria,Pedro'.split(','))
// Split separa o literal escolhendo o separador, no caso foi a virgula. 
//foi gerado um array com 3 elementos. no caso os nomes.


