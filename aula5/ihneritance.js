console.groupCollapsed('Herança em objetos')

const criatura = {
    // fazSom: function() {},
    fazerSom() {
        console.log('grrr~')
    },
    andar() {
        throw new Error('não tenho pernas!')
    } 
}

criatura.fazerSom()

const pato = {
    // fazerSom() {
    //     console.log('quack!')
    // }
}

pato.__proto__ = criatura

pato.fazerSom()
// pato.andar()

console.groupEnd()

// -----
console.groupCollapsed('Herança com Funções')

function Criatura() {}
Criatura.prototype.fazerSom = function() {
    console.log('grrr2~')
}
Criatura.prototype.gritar = function() {
    console.log('GRRRRRR!~')
}

function Pato() {}

// Pato.__proto__ = Criatura
Object.setPrototypeOf(Pato, Criatura)
Pato.prototype.fazerSom = function() {
    console.log('quack 2')
}

console.log('new Pato', Pato, new Pato())

new Criatura().fazerSom()
new Pato().fazerSom()
// new Pato().gritar()

console.groupEnd()

// -----
console.groupCollapsed('Herança com classes')

class CriaturaES6 {
    fazerSom() {
        console.log('grrrr!')
    }
    andar() {
        console.log('rumble rumble')
    }
}

class PatoES6 extends CriaturaES6 {
    fazerSom() {
        console.log('quaaaaaack!')
    }
}

new CriaturaES6().fazerSom()
new PatoES6().fazerSom()
new PatoES6().andar()

console.groupEnd()