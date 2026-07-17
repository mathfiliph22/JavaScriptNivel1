const express = require("express");
const app = express();
// criaçao do servidor
// express recebe requisisão da biblioteca expressa
// app.js(nome arquivo) recebe a bilbioteca express

app.get("/", function(req,res){
    res.send("Seja bem vindo ao nosso site")

});

//criação da rota principal 

app.get("/artigos/:id/", function(req,res){
    if(req.params.id == "1"){
        res.send("1 - como criar app android")
    }else if(req.params.id == "2"){
        res.send("2 - Como usar o node")
    }else{
        res.send("Nenhum arquivo foi encontado")
    }            
});
 // rota artigo com parametros 

app.get("/cursos", function(req,res){
    res.send("Curso java iniciante /n")
});
// rota cursos
app.get("/produtos", function(req, res) {
    res.send("1 - Teclado /n 2 - mouse /n 3 - fones /n")

});
// rota produtos
app.listen(8081,function(){
    console.log("O servidor está rodando")

});

//criação do servidor - app escuta 8081 - local host 
// mostra na tela servidor esta rodando