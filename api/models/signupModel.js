import mongoose from 'mongoose'

const Schema = mongoose.Schema

const UserSchema = new Schema({
  name: {
    type: String,
    required: "Name required"
  },
  phone_number: {
    type: String,
    required: "Phone Number required"
  },
  email: {
    type: String,
    // match: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{5,15}$/i,
    // match:/^[a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{5,15})$/,
    required: "Email required"
  },
  password: {
    type: String,
    // match: /^[a-zA-Z0-9!@#$%^&*]{5,8}$/,
    required: "Password required"
  }
})

export default UserSchema;