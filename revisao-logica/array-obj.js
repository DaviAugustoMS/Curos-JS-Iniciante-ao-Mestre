const nomes = [ 'Davi', 'Maria', '']
const pessoa = {nome: "Davi", idade: 10, email: ""}
const pessoa1 = {}

const pessoas = [{
  nome: "Davi", 
  idade: 26
}, {
  nome: "João",
  idade: 30
}, {
  nome: "Helena",
  idade: 40
}, {
  nome: "Maria",
  idade: 50
}]

for(let i = 0; i < pessoas.length; i++) {
  console.log(`${pessoas[i].nome} possui ${pessoas[i].idade} anos`)
}