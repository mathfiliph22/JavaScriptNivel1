const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout

});

let media;

rl.question("Nome:", function(nome1){


    rl.question("Idade:", function(idade1){


        rl.question("Nome:", function(nome2){




            rl.question("Idade:", function(idade2){


                media = (Number(idade1) + Number(idade2)) / 2 

                console.log("A idade média de Maria e Joao é de", media, "Anos")

                rl.close()
            
            });    
        });

    }); 
    
    
});    

            
                
                     

                



               
    



