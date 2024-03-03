const http = require("http");
const hostName = 'localhost'
const port = 8900
const name ='Kenward Terhemba'

const server = http.createServer()

server.listen(port, hostName, ()=>{
    console.log(`Welcome to the local server owned by ${name} started at http://${hostName}:${port}`)
})