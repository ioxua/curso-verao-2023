console.groupCollapsed('Arrays')

const factorial = (n) => {
    const arr = Array(n).fill(0)

    // return arr.reduce((acc, _, cur) => {
    //     return acc * (cur + 1)
    // }, 1)

    return arr.reduce((acc, _, cur) => acc * (cur + 1), 1)
}

console.log(factorial(5))

const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log( 'Array#map()', arr1.map((n) => n * 2) ) // [2, 4, 6, 8, 10, ...]
console.log( 'Array#filter', arr1.filter(n => n % 3 === 0) ) // [3, 6, 9]

const arr2Item = ['Marcos', 17]
const arr2 = [['Joao', 12], arr2Item, ['Joana', 20]]
console.log( 'Array#flat', arr2.flat() )
console.log( 'Array#flatMap', arr2.flatMap(it => [it[1], it[0]]) )

console.groupCollapsed('Array#forEach')

arr1.forEach((n, idx) => {
    console.log(`Elemento[${idx}] = ${n}`)
})

console.groupEnd()

console.log('Array#includes', arr1.includes(5), arr1.includes(12), arr2.includes(['Joao', 12]))

console.log('Array#every', arr2.every(it => it[1] % 2 === 0))
console.log('Array#some', arr2.some(it => it[1] % 2 === 0))

const sortedArray = [...arr1].sort((a, b) => b - a)
console.log('Original array', arr1)
console.log('Sorted copy', sortedArray)

arr1.push(11, 12, 13)
console.log('Array#push', arr1)
// console.log('Array#pop', arr1.pop())

console.groupEnd()