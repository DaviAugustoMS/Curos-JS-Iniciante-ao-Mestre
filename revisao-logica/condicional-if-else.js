let idade = 21
let paisPresentes = false
let comprouBilhete = true
const podeViajar = (idade >= 18 || paisPresentes) && comprouBilhete

console.log(podeViajar)

// let msgMaiorIdade = ""

// if(idade >= 18) {
//   msgMaiorIdade = "É maior de idade"
// } else {
//   msgMaiorIdade = "É menor de 18 anos"
// }

let msgMaiorIdade = (idade >= 18) ? "É maior de idade" : "É menor de 18 anos"

console.log(msgMaiorIdade)
if (!comprouBilhete) {
  console.log('Não comprou bilhete')
} else {
  if (idade >= 18) {
    console.log('É maior de idade pode viajar.')
  } else {
    console.log('É menor de idade não pode viajar.')

  }
}

let n1 = 0
let n2 = 8

let media = (n1 + n2) / 2

console.log(`media: ${media}`)

if (n1 === 0 || n2 === 0) {
  console.log('Reprovado')
} else if ( media < 7) {
 console.log('Reprovado . mais a como recuperar')
} else {
  console.log('Aprovado')
}