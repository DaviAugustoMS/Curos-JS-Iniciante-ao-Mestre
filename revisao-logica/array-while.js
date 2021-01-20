// criar um array com numeros randomicos não repetidos

function genereteRandomNumber(max) {
  return parseInt(Math.random() * max)
}

let arr = []
let i = 0
while(arr.length <= 20) {
  i++
  let randomNumber = genereteRandomNumber(30)


  if(arr.indexOf(randomNumber) < 0) {
    arr.push(randomNumber)
  } else {
    console.log(randomNumber, "/ja existe no array")
  }
}

console.log(arr)
console.log(" loop foi execu;tado ", i, "vezes")