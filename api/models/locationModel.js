var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// User Schema
var UserSchema = mongoose.Schema({
    location_name: {
        type: String,
        require:true
    },
    is_admin: {
        require:true
    }
});

export default UserSchema;