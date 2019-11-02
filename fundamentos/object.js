//Json ou java script object notation, um objeto em JS não é a mesma coisa que Json
//json é um formato textual.

const prod1 = {}
// formas literais
//{} representa um objeto
//[] representa um array
prod1.nome = 'Celular Ultra Mega'
// pode usar com espaço
//objeto em JS é uma junsão de chaves e valores
//um objeto pode conter outro objeto
prod1.preco = 4998.90
prod1['Desconto Legal'] = 0.40
// é possivel criar atributos com espaço mas Evitar usar espaço
console.log(prod1)

const prod2 ={
    nome: 'Camisa Polo',
    preco: 79.90,
    obj: {
        blabla: 1,
        obj: {
            blabla: 2
        }
    }
}
//é possivel criar um objeto dentro de um objeto
//o exemplo acima, foi pra mostrar criando um objeto usando
// notação literal
// forma Json do objeto acima
// {"nome": "Camisa Polo", "preco": 79.90}

console.log(prod2)