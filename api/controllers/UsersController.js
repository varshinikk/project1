// const userModel=require('../Model/Users');
const cartmodel = require('../models/Cart');
const orderModel = require('../models/Order');

exports.addToCart = (req, res, next) => {
  console.log("jjii")
  const cart = new cartmodel({
    food_name: req.body.food_name,
    price: req.body.price,
    quantity: req.body.quantity,
    total_price: req.body.total_price
  })
  return cart.save()
    .then(results => {
      // console.log(result);
      res.status(200).json({
        message: "food is added to the cart",
        cartId: results._id
      })
    })
}

exports.getcart = (req, res) => {
  cartmodel.find(function(err,data){
    if (err)
    res.send(err);
    res.send(data);
    console.log("hi",data)
})  

  // })
  //   .then(result => {
  //     console.log("hiiii");
  //     console.log(res);
  //     res.status(200).json({
       
  //       message: 'cart details based on userid',
  //       result: result,
  //     })
  //   })
  //   timer.find( function(err,data){
  //     if (err)
  //       res.send(err);
  //       res.send(data);
  //       console.log(data);
  //   })
    // .catch(err => {
    //   if (!err.statusCode) {
    //     err.statusCode = 500;
    //   }
    //   next(err);
    // });
}

// order
exports.addOrder = (req, res, next) => {
  const order = new orderModel({
    userId: req.body.userId,
    RstId: req.body.RstId,
    foodId: req.body.foodId
  })
  return order.save()
    .then(results => {
      res.status(200).json({
        message: "order is added",
        orderId: results._id
      })
    })
}
// get all order details based on user id
exports.getallorder = (req, res, next) => {
  orderModel.find({ userId: { $in: req.params.userid } })
    .then(result => {
      console.log(result);
      res.status(200).json({
        message: 'orders details based on userid',
        result: result
      })
    })
}
// delete order based on foodid
exports.deleteorder = (req, res, next) => {
  orderModel.find({ foodId: req.params.foodId }).remove()
    .then(result => {
      console.log(result);
      res.status(200).json({
        message: 'deleted successfuly',
        result: result
      })
    })
}