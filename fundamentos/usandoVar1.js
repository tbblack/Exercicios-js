{ 
    { 
        { 
            { 
                var sera = 'Será???' 
                console.log(sera)
            }
        } 
    } 
}

console.log(sera)
// a variavel var, dentro de um bloco que não seja uma funcao
// sera visivel para tudo fora da quele bloco

function teste() {
    var local = 123
    console.log(local)
}

teste()
console.log(local)
// quando se define uma variavel dentro de uma função
// o escopo dessa variavel vai ser somente essa funcao
// ela nao sera visivel para nada fora do bloco dessa funcao
