const express = require("express")
const path = require("path")
const app = express()
app.use(express.json())

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,'./Components/index.html'))
})

app.get("/temp",(req,res)=>{
    res.json({Temperature:20.65})
})


app.listen(5000)