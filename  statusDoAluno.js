//Verificador de Status do Aluno
// Cenário: O programa receberá um número de 1 a 4, e exibirá o status correspondente do aluno. Caso o número não seja válido, uma mensagem de erro será apresentada.
// Lógica: Utilizaremos a estrutura switch para avaliar o número digitado pelo usuário e imprimir a mensagem correta para cada caso.

const readline = require('readline-sync');

let StatusAluno;
let mensagem;

console.log("Digite um número de 1 a 4 para verificar o status do aluno:");
StatusAluno = parseInt(readline.question());

    switch (StatusAluno) {
        case 1: 
            mensagem = "Cursando";
            break;

        case 2: 
            mensagem = "Aprovado";
            break;

        case 3: 
            mensagem = "Reprovado";
            break;

        case 4:
            mensagem = "Trancado";
            break;
        default:
            mensagem = "Número inválido! Por favor, digite um número entre 1 e 4.";
            break;
    }

console.log(mensagem);