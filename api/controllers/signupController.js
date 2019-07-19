import mongoose from 'mongoose'
import userSchema from '../models/signupModel'
import bcrypt from 'bcrypt';
const Cryptr = require('cryptr');
const cryptr = new Cryptr('myTotalySecretKey');

const User = mongoose.model('User', userSchema)

// exports.addUser= (req, res) => {
//     const reg= /^[a-zA-Z0-9!@#$%^&*]{5,8}$/;
//     if(reg.test(req.body.Password))
//     {
//         if(req.body.Password){
//         req.body.Password = cryptr.encrypt(req.body.Password);
//     }
//     } 
//     else{
//         req.body.Password ="";
//     }
//     let newUser = new User(req.body)
//     newUser.save((error, data) => {
//         if (error) { res.json(error) }
//         res.json("User Created Successfully")
//     })
// }
exports.Signup = function (req, res) {
  // const reg= /^[a-zA-Z0-9!@#$%^&*]{5,8}$/;
  User.find({ Email: req.body.Email }, function (err, data) {
    if (data != null && data != '') {
      res.send("User Already Exists");
    }
    else {
      if (req.body.password) {
        res.send("password does not match");
      }
      var user = new User(req.body);
      bcrypt.genSalt(10, function (err, salt) {
        bcrypt.hash(user.Password, salt, function (err, hash) {
          user.Password = hash;
          user.save(function (err, data) {
            if (err)
              res.json(data);
            res.send("User Created Succesfully");
          })
        })
      })
    }
  });
};

exports.signin = function (req, res) {
  User.find({ Email: req.body.Email }, function (err, data) {
    if (data != null && data != '') {
      bcrypt.compare(req.body.Password, data[0].Password, function (err, isMatch) {
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