var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const ResturantSchema = new Schema({
    locationId : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "locations"
    },
    resturant_name: {
        type: String,
        required:true
    },
    ratings: {
        type: String,
        required:true
    },
    delivery_timings: {
        type: String,
        required:true
    }
    // location: [
    //     {
    //       type: mongoose.Schema.Types.ObjectId,
    //       ref: "locationController",
    //       required: "location is Required"
    //     }
    //   ]
});

export default ResturantSchema;