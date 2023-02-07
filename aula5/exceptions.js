const podeDarErro = () => {
    const n = Math.floor(Math.random() * 2)
    // console.log('random ', n)
    if (n % 2 !== 0) {
        throw new Error('o numero era par :(')
    }
}

console.log('antes do try-catch')
// podeDarErro()
try {
    podeDarErro()
    console.log('executou normalmente')
} catch (e) {
    console.log('exceção capturada!')
} finally {
    console.log('no finally')
}

console.log('depois do try-catch')