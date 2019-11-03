console.log('a =', a)
var a = 2
console.log('a =', a)
// exemplo do hoisting ou içamento 
// a variavel foi verificada antes de chegar 
// na linha que foi declarada
var a
console.log('a =', a)
a = 2
console.log('a =', a)
// o interpretador meio que ("lêe") o codigo dessa forma,
// ele meio que jogar a declaração da variavel pra cima


function teste() {
    console.log('a =', a)
    var a = 2
    console.log('a =', a)
}
teste()
// mesmo dentro da função ela sofre o efeito de hoisting
// vai para o topo da função

console.log('b =', b)
let b = 2
console.log('b =', b)
// o let não sofre hoisting, acaba provocando o erro quando tenta
// acessar a variavel antes de declarar