const bkashRouters = require("express").Router();
const settingJson = require("../../settings.json");
const bkashSetting = require("../../settings.json").bkash;
const bkashClass = require("../services/bkash/bkash.functions");
const Bkash = new bkashClass(
  bkashSetting.username,
  bkashSetting.password,
  bkashSetting.appKey,
  bkashSetting.appSecret,
  bkashSetting.isSandbox
);

bkashRouters.get("/", (req, res, next) => {
  res.send("<h1>Bkash api router initialized</h1>");
});
bkashRouters.post("/", async (req, res, next) => {
  console.log(req.body);
  let bkashPaymentToken = await Bkash.grantToken();
  console.log(bkashPaymentToken.id_token);
  const requestPaymentObj = {
    mode: "0011",
    merchantAssociationInfo: `MI${crypto.randomUUID().slice(0, 2)}MID${crypto
      .randomUUID()
      .slice(0, 15)
      .split("-")
      .join("")}`,
    amount: req.body.totalPrice,
    merchantInvoiceNumber: `Inv${crypto.randomUUID().slice(0, 3)}`,
    agreementID: `${crypto.randomUUID().split("-").join("")}`,
    baseURL: settingJson.base,
    token:bkashPaymentToken.id_token,
  };
  console.log(requestPaymentObj);

  const paymentUrl = await Bkash.createPayment(requestPaymentObj);
  console.log(paymentUrl);
  res.status(201).end();
  next();
});

module.exports = bkashRouters;
