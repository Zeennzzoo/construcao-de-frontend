const http = require('http');

//Cria um servidor http
const server = http.createServer((req,res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain') // Define o tipo de conteudo como texto
    res.end('Olá! Pessoal!\n');
});

//Define a porta em que o servidor irá escutar
const PORT = 3000;
server.listen(PORT, () => {
    console.log('Servidor Rodando em http://localhost:${PORT}/')
})