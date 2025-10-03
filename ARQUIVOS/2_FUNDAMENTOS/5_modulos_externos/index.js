const minimist = require("minimist")

const args = minimist(process.argv.slice(2))

console.log(args) // mostra todos os argumentos passados na linha de comando a partir do terceiro

const nome = args['nome'] // pega o valor do argumento nome
const profissao = args['profissao'] // pega o valor do argumento profissao

console.log(nome, profissao) // mostra o valor do argumento nome

console.log(`Olá ${nome}, você é ${args['profissao']}.`) // mostra uma mensagem com o nome e profissão passados como argumentos

