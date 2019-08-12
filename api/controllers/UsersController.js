// const userModel=require('../Model/Users');
const cartmodel= require('../models/Cart');
const orderModel=require('../models/Order');

// exports.signup=(req,res,next)=>{
//     debugger;
//     // console.log(req.body);
// const name=req.body.Name;
// const email=req.body.email;
// const password=req.body.password;

// const user=new userModel({
//     name:name,
//     email:email,
//     password:password
// })
// // console.log(user);
// return user.save()
// .then(result=>{
//     console.log(result);
//     res.status(200).json({
//         message:"user created",
//         user_id:result._id

//     })
// })
// .catch(err=>{
//     if(!err.statusCode){
//         err.statusCode=500;
//     }
//     next(err);
// })
// }

// // login

// exports.login=(req,res,next)=>{
//     // console.log(req);
//     const email=req.body.email;
//     const password=req.body.password;
//     // console.log(email,password);
//     userModel.findOne({email:email,password:password}) 
//     .then(result=>{
//         // console.log(result);
//         if(!result){
//             const error = new Error('A user with this email could not be found.');
//             error.statusCode = 401;
//             throw error;
//          }
//         res.status(200).json({
//            message:"login success" ,
//            userId:result._id

//         })
//     })
//     .catch(err=>{
//         if(!err.statusCode){
//             err.statusCode=500;
//         }
//         next(err);
//     })
// }

// cart
exports.addToCart=(req,res,next)=>{
    console.log("jjii")
    const cart = new cartmodel({
       food_name:req.body.food_name,
       price:req.body.price,
       quantity:req.body.quantity,
       total_price:req.body.total_price 
    })
    return cart.save()
    .then(results=>{            
        console.log(result);
        res.status(200).json({
            message:"food is added to the cart",
            cartId:results._id
        })
    })
}

exports.getcart=(req,res,next)=>{
   cartmodel.find({})
    .then(result=>{
        console.log("hiiii");
        res.status(200).json({
            message: 'cart details based on userid',
            result: result

        }) 
    })
    .catch(err => {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    });  
}

// order
exports.addOrder=(req,res,next)=>{
    const order = new orderModel({
       userId:req.body.userId,
       RstId:req.body.RstId,
       foodId:req.body.foodId 
    })
    return order.save()
    .then(results=>{
        res.status(200).json({
            message:"order is added",
            orderId:results._id
        })
    })
}
// get all order details based on user id
exports.getallorder=(req,res,next)=>{
    orderModel.find({userId:{$in:req.params.userid}})
    .then(result=>{
        console.log(result);
        res.status(200).json({
            message: 'orders details based on userid',
            result: result

        }) 
    })  
}
// delete order based on foodid
exports.deleteorder=(req,res,next)=>{
    orderModel.find({foodId:req.params.foodId}).remove()
    .then(result=>{
        console.log(result);
        res.status(200).json({
            message:'deleted successfuly',
            result:result
        })
    })
}
// 

