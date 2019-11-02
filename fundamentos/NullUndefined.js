const a = {name: 'Teste'}
console.log(a)
const b = a
b.name = 'Opa'
console.log(a)
// nesse caso, a constante a e b estão armazenando o endereço
// da memoria que esta armazenado o objeto
// pode ser parecido com ponteiros em C mas só de primeira vista

let c = 3
let d = c
d++
console.log(d)
console.log(c)
// nesse caso, como é um valor primitivo da linguavem (number)
// foi feito a copia do valor e não endereço como acontece
// no exemplo anterior com objeto

let valor // não inicializada
console.log(valor)
// variavel não inicializada por padrão é undefined ou indefinida
// console.log(valor2)
// nesse caso ele retorna que valor2 is not defined
// que quer dizer que a variavel não foi declarada

valor = null // ausência de valor
// null quer dizer que a variavel não tem nenhum valor primitiro
// e nem que aponta para algum endereço na memoria
console.log(valor)
//console.log(valor.toString()) // Erro!
const produto = {}
console.log(produto.preco)// não da erro mas aponta que preco esta indefinido
// agora, se eu tentar retornar no console produto.preco.a vai dar error
//pois preco nao esta definido
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // evitar atribuir undefined
// no caso de null dependendo do caso da pra zerar de outras formas
// mas sempre evitar de atribuir undefined

console.log(!!produto.preco)
//delete produto.preco se quiser tirar um atributo de um objeto
console.log(produto)

produto.preco = null // sem preço
console.log(!!produto.preco)
console.log(produto)