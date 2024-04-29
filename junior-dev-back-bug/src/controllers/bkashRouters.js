const bkashRouters = require("express").Router()

bkashRouters.get("/",(req,res,next)=>{
    res.send("<h1>Bkash api router initialized</h1>")
})
bkashRouters.post("/",async(req,res,next)=>{
    console.log(req.body);
    res.status(201).end()
})

module.exports = bkashRouters