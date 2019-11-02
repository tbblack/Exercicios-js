// Funcao sem retorno
// funcão executa um processo baseado em sentenças de codigos
// define um bloco associado (delimitado por [])
// logo dpois tem o corpo do bloco, aonde tem todas as sentenças de codigo

function imprimirSoma(a, b){
    console.log(a + b)
}

imprimirSoma(2 , 3)
// chamada normal da função
imprimirSoma(2)
// chamada da função com somente um numero, o segundo vai ser mandado
// sendo indefinido, assim retornando no log  NaN
imprimirSoma(2, 3 ,4 ,5 ,6 ,7 ,8)
// chamada da função com mais valores do que precisa
// só pega até sua capacidade e ignora o resto
imprimirSoma()
// chamada de função com nenhum valor, assim os 2 acabam sendo
// setados com NaN

// funcao com retorno
function soma(a, b = 0){
    return a + b
}
// na declaração da funcao, foi declarado que se b nao receber 
// nenhum valor, por padrão ele vai ser 0
console.log(soma(2, 3))
console.log(soma(2))
console.log(soma())