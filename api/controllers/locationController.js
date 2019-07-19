var mongoose = require('mongoose'),
User = mongoose.model('User');

exports.createUser = function(req, res) {
    var new_task = new User(req.body);
    new_task.save(function(err, task) {
    if (err)
    res.send(err);
     res.json(task);
    });
};
          