const funcs = []

for (var i = 0; i < 10; i++){
    funcs.push(function() {
        console.log(i)
    })
}

funcs[2]()
funcs[8]()

// como var não tem escopo de função, acaba que não armazena os
// valores progresivamente e sim só o final, no caso o 10