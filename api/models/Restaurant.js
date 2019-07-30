// var mongoose = require('mongoose');
// var Schema = mongoose.Schema;

// const ResturantSchema = new Schema({
//     locationId : {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: "locations"
//     },
//     resturant_name: {
//         type: String,
//         required:true
//     },
//     ratings: {
//         type: String,
//         required:true
//     },
//     delivery_timings: {
//         type: String,
//         required:true
//     }
//     // location: [
//     //     {
//     //       type: mongoose.Schema.Types.ObjectId,
//     //       ref: "locationController",
//     //       required: "location is Required"
//     //     }
//     //   ]
// });

// export default ResturantSchema;


const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const restaurantSchema=new Schema({
    locationId:{
        type:Schema.Types.ObjectId,
        ref:'locations',
        required:true
    },
    RName:{
        type:'String',
        required:true
    },
    DeliveryCharge:{
        type:'Number',
        required:true
    }
})
module.exports = mongoose.model('restaurants',restaurantSchema);