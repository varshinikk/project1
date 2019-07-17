import mongoose from 'mongoose'
 
const Schema = mongoose.Schema
 
const DownloadSchema = new Schema({
   Name: {
        type: String
    },
    Phone_Number: {
      type: String
    },
    Email: {
    type: String
    },
    Password: {
        type: String
    }
})

export default DownloadSchema;