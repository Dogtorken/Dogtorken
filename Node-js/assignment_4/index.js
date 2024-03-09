const express = require('express')
const app = express()

const authorRouter = require('./authors')
const logger = require('./logger')

app.use("/authors", authorRouter)
app.use(logger);



// app.get("/", (req, res)=>{
//     res.send("Hello from the server")
// })

app.listen(7000)