const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cartSchema = new Schema({
  // userId:{
  //     type:Schema.Types.ObjectId,
  //     ref:'users',
  //     required:true
  // },
  // foodId:{
  //     type:Schema.Types.ObjectId,
  //     ref:'food',
  //     required:true
  // }
  food_name: {
    type: String
  },
  price: {
    type: String
  },
  quantity: {
    type: String
  },
  total_price: {
    type: String
  }
})
module.exports = mongoose.model('cart', cartSchema);