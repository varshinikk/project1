import mongoose from 'mongoose'
import menuSchema from '../models/menuModel'
 
const Menu = mongoose.model('Menu', menuSchema)
exports.createMenu = function(req, res) {
    var new_data = new Menu(req.body);
    new_data.save(function(err, data) {
    if (err)
    res.send(err);
     res.json(data);
    });
};
   