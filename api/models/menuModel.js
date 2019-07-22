var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const MenuSchema = new Schema({
    roti: {
        type: String,
        require:true
    },
    rice: {
        type: String,
        require:true
    },
    gravy: {
        type: String,
        require:true
    },
    soup: {
        type: String,
        require:true
    },
    starters: {
        type: String,
        require:true
    },
    ice_cream: {
        type: String,
        require:true
    }
});

export default MenuSchema;