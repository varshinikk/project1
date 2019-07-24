import mongoose from 'mongoose'
import resturantSchema from '../models/resturantModel'
 
const Resturant = mongoose.model('Resturant', resturantSchema)
exports.createResturant = function(req, res) {
    var new_data = new Resturant(req.body);
    new_data.save(function(err, data) {
    if (err)
    res.send(err);
     res.json(data);
    });
};


// mongoose.location("/:locationId/location", async (req, res) => {
//     //Find a POst
//     const location = await Location.findOne({ _id: req.params.postId });
  
//     //Create a Comment
//     // const location = new Loaction();
//     // location.location_name = req.body.loaction_name;
//     // location.loaction = loaction._id;
//     // await location.save();
  
//     // Associate Post with comment
//     loaction.loactions.push(loaction._id);
//     await loaction.save();
  
//     res.send(loaction);
//   });
  
//   //Read a Comment
  
//   router.get("/:loactionId/loaction", async (req, res) => {
//     const loaction = await Loaction.findOne({ _id: req.params.loactionId }).populate(
//       "loactions"
//     );
//     res.send(loaction);
//   });