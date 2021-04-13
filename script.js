const http = require('http');
const url = require('url');
const calc = require('./functions.js');

http.createServer(function(req, res){
    const {n1,n2,op}=url.parse(req.url, true).query;
    
    let operacao = calc(Number(n1), Number(n2),op)

    let resultado = 'Resultado da operacao: ' + operacao

    res.end(resultado);
    
}).listen(3000)

 