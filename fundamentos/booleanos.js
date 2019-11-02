let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!isAtivo)
//usando a negação, trasforma o 1 em false.
console.log(!true)
//o mesmo efeito que a linha de cima, negação esta negando o true.

console.log(!!isAtivo)
//usando a dupla negação transforma o 1 em true.
console.log(!!true)
//o mesmo efeito que a linha de cima
//dupla negação esta negando o true duas vezes, assim mostrando true.

console.log('os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!!'texto')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))
console.log(!!(isAtivo = Infinity))
console.log(!!(isAtivo = 33))

console.log('os falsos...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('para finalizar..')
console.log(!!('' || null || 0 || ' '))

let nome = 'Lucas'

console.log(nome || 'Desconhecido')
// operação boleana, retorna o valor verdadeiro
