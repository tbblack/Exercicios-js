console.log(7/0)
// retorna o tipo Infinity

console.log("10"/2) 
// ele vai verificar se a String dentro é possivel converter, se for possivel ele faz a operação

console.log('3'+2)
// no caso, o 3 é string, que acaba tendo preferencia, então acaba concatenando, retornando 32 no exemplo 
//se colocar - não faz sentido na string então vai fazer a operação logica normalmente

console.log("Show!" * 2) 
// em algumas linguagens ele replica a String, mas em java não, ele retorna NaN

console.log(0.1 + 0.7) 
// não retorna 0.8, retorna 0.79999999999, devido a especificação da operação que o js suporta

// console.log(10.toString()) 
// é possivel se usado com o number mas não com o literal

console.log((10.345).toFixed(2))
//diferente do caso a cima, é possivel chamar o literal dentro de parenteses e ai chamar a função