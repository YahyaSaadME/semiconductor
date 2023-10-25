const express = require("express")
const cors = require('cors')
const app = express()
app.use(express.json())
app.use(cors())

app.get("/",(req,res)=>{
    res.json({msg:"Server is up and running"})
})

app.get("/temperature",(req,res)=>{
    res.json({Temperature:20})
})


app.listen(5000)