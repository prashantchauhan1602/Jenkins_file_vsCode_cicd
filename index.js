const express = require("express")
const app = express()

const PORT = process.env.PORT || 8000

app.get('/', (req, res)=>{
    return res.json({
        message:"Hello from Docker Test"
    })
})

app.listen(PORT, ()=>{
    console.log(`Server started at ${PORT}`)
})