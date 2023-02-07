console.groupCollapsed('For if etc')

const myName = "João"

if (myName === 'João') {
    idade = 23
    console.log('Seu nome é João! e vc tem', idade, 'anos')
} else if (myName === 'Maria') {
    console.log('Vc eh a maria!')
} else {
    console.log('Não te conheço :(')
}

switch (myName) {
    case 'João':
    case 'Maria':
        console.log('João ou maria')
        break
    default:
        console.log('não te conheço mesmo')
        break
}

for (let i = 0; i <= 10; i++) {
    console.log('Iteração:', i)
}

console.log('De dois em dois')
for (let i = 0; i <= 10; i++) {
    if (i % 2 === 0) continue
    console.log('Iteração:', i)
}

console.log('Break')
for (let i = 0; i <= 10; i++) {
    if (i === 5) break
    console.log('Iteração:', i)
}

console.log('Return')
function qualquer() {
    for (let i = 0; i <= 10; i++) {
        if (i === 5) return 'oi'
        console.log('Iteração:', i)
    }
}

const retorno = qualquer()
console.log('retorno da função', retorno)

// while (2 < 1) {}
// do {} while(2 < 1);

// Estas linhas gerarão erro :D
// console.log('i', i)
// console.log('idade:', idade)

console.groupEnd()