// nome

console.log(process.argv) // mostra todos os argumentos passados na linha de comando

const args = process.argv.slice(2) // remove os dois primeiros argumentos que são fixos

console.log(args) // mostra apenas os argumentos passados na linha de comando a partir do terceiro

const nome = args[0].split("=")[1] // pega o primeiro argumento e separa pelo '=' para pegar o valor

console.log(nome) // mostra o valor do argumento nome

const idade = args[1].split("=")[1] // pega o primeiro argumento e separa pelo '=' para pegar o valor

console.log(idade) // mostra o valor do argumento nome

console.log(`Olá ${nome}, você tem ${idade} anos.`) // mostra uma mensagem com o nome e idade passados como argumentos