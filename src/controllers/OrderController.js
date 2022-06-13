const { count } = require("console")
const OrderModel= require("../models/OrderModel")
const userModel = require("../models/userModel")
const ProductModel = require("../models/ProductModel")

const createOrder= async function (req, res) {
    let data = req.body
    // let usrId = data.userId
    // let prdtId=data.ProductId
    // if(!usrId) return res.send({msg: 'UserId is mandatory in the request'})
    // if(!prdtId) return res.send({msg: 'ProductId is mandatory in the request'})
   


    let user = await userModel.findById(data.userId);
  if (!user) res.send("Entered user ID is not valid");

  let product = await ProductModel.findById(data.productId);
  if (!product) res.send("Entered Product ID is not valid");
  const date = new Date();
  data["date"] = date.toLocaleDateString("en-US");
  let ordercreated=await OrderModel.create(data)
    res.send({msg:ordercreated})
}

module.exports.createOrder= createOrder

