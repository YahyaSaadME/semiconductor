const express = require("express")
const app = express()

app.get("/",(req,res)=>{
    res.send("Done")
})

app.listen(5000)