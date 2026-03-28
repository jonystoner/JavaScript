// biblioteca do node para receber as informação do usuário via terminal.
const readline = require('readline');

// diz que a leitura será via terminal
const leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

leitor.question("Qual é seu nome?", (nome) => {
    console.log("Olá", nome);
    console.log("Seja bem-vindo(a)!");

    leitor.question("Qual a sua idade?", (idade) => {
        if (idade>=18) {
            console.log("Você é maior de idade!");
        } else {
            console.log("Você é menor de idade!");
        };
        leitor.close();
    });
});