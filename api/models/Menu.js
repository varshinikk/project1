// var mongoose = require('mongoose');
// var Schema = mongoose.Schema;

// const MenuSchema = new Schema({
//     roti: {
//         type: String,
//         required:true
//     },
//     rice: {
//         type: String,
//         required:true
//     },
//     gravy: {
//         type: String,
//         required:true
//     },
//     soup: {
//         type: String,
//         required:true
//     },
//     starters: {
//         type: String,
//         required:true
//     },
//     ice_cream: {
//         type: String,
//         required:true
//     }
// });

// export default MenuSchema;


const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const menuSchema=new Schema({
    RstId:{
        type:Schema.Types.ObjectId,
        ref:'restaurants',
        required:true
    },
    menuName:{
        type:'String',
        required:true
    }
})
module.exports = mongoose.model('menu',menuSchema);