import chalk from 'chalk';

const nota = 5;


if (nota >= 7) {
  console.log(chalk.green('Parabéns! Você foi aprovado! Sua nota foi: ' + nota));
}else {
  console.log(chalk.bgRed.black('Você foi reprovado!'));
}