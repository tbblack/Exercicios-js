//O array é heterogeneo pois a linguagem é fracamente tipada
//No mesmo array se pode colocar varios tipos de danos
//não é limitado a só um tipo
//o array cresce e diminue conforme for preciso

const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
// array é uma estrutura indexada
// tem um indice associado começando pelo 0
console.log(valores[4])
// como nao tem nada na possição 4
// retornou undefined ou indefinido
valores[4] = 10
console.log(valores)
valores[10] = 10
console.log(valores)
// a linguagem identifica espaços vazios dentro da array
console.log(valores.length)
// mostra tamanho da array
valores.push({id: 3}, false, null, 'teste')
// push insere dados no array
// Reafirmando, array é uma estrutura heterogenea
// Aceita varios tipos de valores
// O IDEAL é manter um array pra cada tipo de coisa ("array homogeneo")
console.log(valores)

console.log(valores.pop())
//retorna o ultimo valor do array e o retira do mesmo
delete valores[0]
//delete funciona no contesto de objeto
//pra tirar um atributo de dentro do objeto
//deleta o valor que esta na posição X

console.log(valores)
console.log(typeof valores)
// array em JS é um objeto