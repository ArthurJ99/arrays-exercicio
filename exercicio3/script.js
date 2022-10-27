// Exercicio 03

const numeros = [4, 7, 2, 9]
const strings = ["banana","maca","melancia","mamao"]
const arrayMista = [5, "arthur", 3===3]


numerosCopia= numeros.slice()
stringsCopia= strings.slice()
arrayMistaCopia= arrayMista.slice()


// a)
numerosCopia.unshift(10);

console.log("Original",numeros)
console.log("Cópia",numerosCopia)

// b)

stringsCopia.pop()

console.log("Original", strings)
console.log("Cópia", stringsCopia)

// c)

arrayMistaCopia.splice(1,1)

console.log("Original",arrayMista)
console.log("Cópia", arrayMistaCopia)