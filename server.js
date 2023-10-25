const express = require("express")
const app = express()
app.use(express.json())

app.get("/",(req,res)=>{
    res.json({msg:"Server is up and running"})
})

app.get("/temperature",(req,res)=>{
    res.send(20)
})


app.listen(5000)