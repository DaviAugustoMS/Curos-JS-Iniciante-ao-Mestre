// + - * / % ** operados aritimeticos

let n1 = 10
let n2 = 5

// console.log(n1 + n2)
// console.log(n1 - n2)
// console.log(n1 * n2)
// console.log(n1 / n2)
// console.log(n1 % n2)
// console.log(2 ** 3)


// operadores de atribuiçao

let n3 = 20
// n3 = n3 + 15
n3 += 15
console.log(n3)

// Incremento e decremento  

let i = 0
// i = i + 1
// i++ pos incremente  
// i-- pos decrement
// ++i pre increment
// --i pre decrement

// console.log(i++)
// console.log(i)

// Operadores de comparaçao

/*
igualdade de valor ==
igualdade de valor e tipo ===
<,>, <=, >=
!= valores diferentes
!== valores e tipos diferentes
*/

// console.log(n1, n2, n3)

// console.log(n1 == '10')
// console.log(n1 === '10')
// console.log(n1 < 10)
// console.log(n1 > 10)
// console.log(n1 <= 10)
// console.log(n1 >= 10)
// console.log(n1 != 10)
// console.log(n1 !== 10)

// Operadores logicos
// And(&&) or(||) Not(!)

/*
  para uma pessoa viajar para o exterior;
  - precisa ser maior de 18 anos 
  OU acompanhado com os pais
  and 
  ter comprado o bilhete

*/

let idade = 21
let paisPresentes = false
let comprouBilhete = false
const podeViajar = (idade >= 18 || paisPresentes) && comprouBilhete
console.log(`pode viajar: ${podeViajar}`)

// Presendencia de operadores