var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const MenuSchema = new Schema({
    roti: {
        type: String,
        required:true
    },
    rice: {
        type: String,
        required:true
    },
    gravy: {
        type: String,
        required:true
    },
    soup: {
        type: String,
        required:true
    },
    starters: {
        type: String,
        required:true
    },
    ice_cream: {
        type: String,
        required:true
    }
});

export default MenuSchema;