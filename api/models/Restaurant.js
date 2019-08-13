const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const restaurantSchema = new Schema({
  locationId: {
    type:Schema.Types.ObjectId,
    ref:'locations',
    required:true
  },
  RName: {
    type: 'String',
    required: true
  },
  DeliveryCharge: {
    type: 'String',
    required: true
  }
})
module.exports = mongoose.model('restaurants', restaurantSchema);