var numero = 1
{
    var numero = 2
    console.log('dentro =', numero)
}
console.log('fora =', numero)

// dentro do mesmo escopo, ter variaveis com nomes diferentes
// para evitar conflito
// agora, em escopos diferentes, é possivel ter variaveis
// de nomes iguais sem causar conflitos
