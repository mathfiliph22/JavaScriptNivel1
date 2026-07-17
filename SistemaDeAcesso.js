const readline = require("readline")
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

sim 

let permissao


rl.question("Digite o seu nome: ", function(nome){


    rl.question("Digite a sua idade: ", function(idade){

            if (idade >= 18) {
                console.log("permissao concedida")
            }  else if (idade < 18) {

                rl.question("Voce esta acompanhada? S/N",  function(permissao){

                    if (permissao === "S") {
                        console.log("Pode entrar")

                    }
                      else {
                        console.log("Entrada permitida apenas para maiores de 18")
                    }
                                rl.close()
        

                });
            }

                

            

            

                
                          

            

               
                    
                
                

        

                    

                    
    });  
                    

                    

}); 





                







                 
            
            
            
            
            
            
            
            

              

    






          





        

       
    


             
