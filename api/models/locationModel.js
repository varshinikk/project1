var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const LocationSchema = new Schema({
    location_name: {
        type: String,
        required:true
    }
    // resturant: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "resturantController",
    //     required: "Resturant is Required Field"
    //   }
    // is_admin: {
    //     type: String,
    //     require:true
    // }
});

export default LocationSchema;