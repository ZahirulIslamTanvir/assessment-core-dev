// const bkashSetting = require("../../settings.json").bkash
// const bkashClass = require("../services/bkash/bkash.functions")
// const Bkash = new bkashClass(bkashSetting.username,bkashSetting.password,bkashSetting.appKey,bkashSetting.appSecret,bkashSetting.isSandbox)

// const bkashTokenExtractor = async(req,res,next)=>{
//     console.log("bkash Token extractor middleware");
//     const bkashPaymentToken = await Bkash.rantToken();
//     req.bkashPaymentToken = bkashPaymentToken;
//     console.log(bkashPaymentToken);
//     next()
// }
// module.exports = {bkashTokenExtractor}
