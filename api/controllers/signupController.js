import mongoose from 'mongoose'
import userSchema from '../models/signupModel'
import bcrypt from 'bcrypt';
const Cryptr = require('cryptr');
const cryptr = new Cryptr('myTotalySecretKey');

const User = mongoose.model('User', userSchema)

exports.getUser = (req, res) => {
  User.find({}, (error, data) => {
    if (error) { res.json(error) }
    res.json(data)
  })
}
exports.signup = function (req, res) { 
  // console.log(req)
  const reg_email = /^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]$/;
  const reg_mob=/^[0-9]{10}$/;
  const reg_pwd = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,15})/;
  if (!reg_pwd.test(req.body.password)) {
    res.send('password is invalid');
  }
  if(!reg_mob.test(req.body.phone_number)){
  res.send('Mobile number is invalid');
  }
  if (reg_email.test(req.body.email)) {
    // console.log(req.body);
    User.find({ email: req.body.email }, function (err, data) {
      if (data != null && data != '') {
        res.send('User already exists');
      }
      else {
        var user = new User(req.body);
        bcrypt.genSalt(10, function (err, salt) {
          bcrypt.hash(user.password, salt, function (err, hash) {
            user.password = hash;
            user.save(function (err, data) {
              if (err)
                res.send(err.message);
              // res.json(data);
              res.json("user succesfully created");
            })
          })
        })
      }
    });
  }
  else {
    res.send('Email is invalid');
  }
};
exports.signin = function (req, res) {
  User.find({ email: req.body.email }, function (err, data) {
    if (data != null && data != '') {
      bcrypt.compare(req.body.password, data[0].password, function (err, isMatch) {
        if (isMatch == true) {
          res.send("User succesfully signed in");
        }
      });
    }
    else {
      res.send("User does not exists");
    }
  });
};