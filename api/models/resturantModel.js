var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const ResturantSchema = new Schema({
    resturant_name: {
        type: String,
        require:true
    },
    ratings: {
        type: String,
        require:true
    },
    delivery_timings: {
        type: String,
        require:true
    }
});

export default ResturantSchema;