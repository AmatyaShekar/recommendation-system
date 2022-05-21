const express = require("express")
const app= express()

app.get('/',(req,res)=>{
    res.send("Amatya here")
})


app.listen(8000,()=>{
    console.log("LISTENING ON PORT 8000")
})