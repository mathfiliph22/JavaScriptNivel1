const readline = require("readline")

const rl = readline.createInterface({
     input: process.stdin,
     output: process.stdout
});

let area
let perimetro
let diagonal

rl.question("Digite a base", function(base) {


    rl.question("Digite a altura", function(altura) {


           area = Number(base) * Number(altura)
           perimetro = 2 * Number(base) + 2 * Number(altura)
           diagonal = Math.sqrt(base ** 2 + altura ** 2);

           console.log("AREA =", area.toFixed(4));
           console.log("PERIMETRO =", perimetro.toFixed(4));
           console.log("DIAGONAL =", diagonal.toFixed(4));

           rl.close()  
 


    });    
});




