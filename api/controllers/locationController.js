import mongoose from 'mongoose'
import locationSchema from '../models/locationModel'
 
const Location = mongoose.model('Location', locationSchema)
exports.createLocation = function(req, res) {
    var new_data = new Location(req.body);
    new_data.save(function(err, data) {
    if (err)
    res.send(err);
     res.json(data);
    });
};
          