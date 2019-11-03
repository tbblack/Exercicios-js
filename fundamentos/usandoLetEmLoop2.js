const funcs = []

for (let i = 0; i < 10; i++){
    funcs.push(function() {
        console.log(i)
    })
}

funcs[2]()
funcs[8]()

// como let tem escopo debloco ele consegue visualizar 
// os valores do i
