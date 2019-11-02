const nome = 'rebeca'
const concatenacao = 'Olá ' + nome + '!'
const template = `
    Olá
    ${nome}!`
   
// ${} faz a interpolação da constante nome no texto

console.log(concatenacao, template)

//Expressoes...
console.log(`1 + 1 = ${1 + 1}`)

const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}!`)

// usando template string, é possivel interpolar literais, e até mesmo chamar uma função


