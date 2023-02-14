const express = require('express')
const app = express()
const port = 3001

app.get('/', (req,res)=>{
    res.send("app GET")
})

app.post('/', (req,res)=>{
    res.send("app POST")
})

app.delete('/',(req,res)=>{
    res.send("app DELETE")
})

app.listen(port,()=>{
    console.log(`App online na porta ${port}`)
})
