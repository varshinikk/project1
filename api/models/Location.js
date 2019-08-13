const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const locationSchema = new Schema({
  locationName: {
    type: 'String',
    required: true
  },
  isAdmin: {
    type: 'Boolean',
    default: true
  }
})
module.exports = mongoose.model('location', locationSchema);