const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout

});

rl.question("Digite o nome: ", function(nome){

    rl.question("Digite a idade: ", function(idade){

        rl.question("Digite o salário do 1° mes: ", function(salario1){      

            rl.question("Digite o salario do 2° mês: ", function(salario2){

                idade = Number(idade);
                salario1 = Number(salario1);
                salario2 = Number(salario2); 

            
                console.log("Dados digitados");
                console.log("Qual é o seu nome: ", nome);
                console.log("Qual é a sua idade: ", idade);
                console.log("Qual é o seu salario do mes 1: ", salario1);
                console.log("Qual é o seu salario do mes 2: ", salario2);

                rl.close()

            });

        });
     
    });

});










