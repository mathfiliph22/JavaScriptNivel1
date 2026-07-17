const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
}); 

let area;
let preco;


rl.question("Digite a largura do terreno: ", function(largura) {


    rl.question("Digite o comprimento do terreno: ", function(comprimento) {

        rl.question("Digite o valor do metro quadrado: ", function(metroQuadrado) { 

            
            

            area = Number(largura) * Number(comprimento)
            preco = area * Number(metroQuadrado)
             

            console.log("A area do terreno é de: ", area)
            console.log("O preço do terreno é igual a: ", preco)
        
            
            rl.close()
           


        });
    


    });

    

    
    
     

});        
    


    

    



