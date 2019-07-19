import mongoose from 'mongoose'

const Schema = mongoose.Schema

const UserSchema = new Schema({
  Name: {
    type: String,
    required: "Name required"
  },
  Phone_Number: {
    type: String,
    required: "Phone Number required"
  },
  Email: {
    type: String,
    // match:/^[a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{5,15})$/,
    required: "Email required"
  },
  Password: {
    type: String,
    // match: /^[a-zA-Z0-9!@#$%^&*]{5,8}$/,
    required: "Password required"
  }
})

export default UserSchema;