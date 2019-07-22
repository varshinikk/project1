var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const LocationSchema = new Schema({
    location_name: {
        type: String,
        require:true
    }
    // is_admin: {
    //     type: String,
    //     require:true
    // }
});

export default LocationSchema;