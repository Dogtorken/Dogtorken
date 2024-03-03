const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) =>{
    res.writeHead(200, { "Content-Type": "application/json"})
    res.write('Hi there\n')
    if (req.url === '/books' && req.method === "GET"){
        res.write('List of BOOKS\n')
    } else if (req.url === '/books' && req.method === "PUT"){
        res.write('New book entered successfully\n')
    } else if (req.url === '/books' && req.method === "DELETE"){
        res.write('Book deleted successfully\n')
    } else if (req.url === '/books/author' && req.method === "GET"){
        res.write('Book authors\n')
    } else if (req.url === '/books/author' && req.method === "POST"){
        res.write('Author list updated successfully\n')
    } else if (req.url === '/books/author' && req.method === "PUT"){
        res.write('New author added successfully\n')
    } 
    res.end('Goodbye from the server.')
});

server.listen(3000, () =>{
    console.log('server started.')
})