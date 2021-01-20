function sum(n1, n2) {
  if(typeof n1 !== 'number' || typeof n2 !== 'number') {
     throw Error("Sum aceita apenas numeros")
  }
  return n1 + n2
}

let soma = ""
try {
  soma = sum(3, "a")
} catch (error) {
  console.log("Ocorreu um erro")
  console.log(error.message)
}
// let soma = sum(3, "a")
console.log(soma)