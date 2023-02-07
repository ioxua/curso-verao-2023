console.group("Closure");

const criarCumprimentador = (prefixo = '', sufixo = '') => {
    console.log('criando cumprimentador com', prefixo, sufixo)
    return (nome) => {
        // console.log('chamando cumprimentador com', prefixo, nome, sufixo)
        return prefixo + nome + sufixo
    }
}

const padrao = criarCumprimentador()
const emPt = criarCumprimentador('Olá', '!')
const emEn = criarCumprimentador('Hello')

padrao('Comum')
emPt('Marcos')
emEn('Jerry')

console.groupEnd()