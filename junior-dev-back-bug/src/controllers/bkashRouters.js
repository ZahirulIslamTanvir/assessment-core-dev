const bkashRouters = require("express").Router()
const bkashSetting = require("../../settings.json").bkash
const bkashClass = require("../services/bkash/bkash.functions")
const Bkash = new bkashClass(bkashSetting.username,bkashSetting.password,bkashSetting.appKey,bkashSetting.appSecret,bkashSetting.isSandbox)


bkashRouters.get("/",(req,res,next)=>{
    res.send("<h1>Bkash api router initialized</h1>")
})
bkashRouters.post("/",async(req,res,next)=>{
    console.log(req.body);
    let bkashPaymentToken = await Bkash.grantToken()
    console.log(bkashPaymentToken.id_token);
    res.status(201).end()
    next();
})

module.exports = bkashRouters