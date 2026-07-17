const modeloreadline = require("readline");
// const = cria uma variavel que nao sera alterada
// modeloreadline = nome da variavel
// require("modeloreadline") = pede ao node.js para carregar a biblioteca readline que ja vem instalada
const rl = modeloreadline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// rl = readline
// createInterface = cria uma interface de entrada e saida de dados
// input : process.stdin = entrada de dados do teclado
// output : process.stdout = saida de dados do console