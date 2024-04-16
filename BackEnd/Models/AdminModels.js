import mongoose from "mongoose";
const admin = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  }, email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true
  }
}, { timestamps:true });

export default mongoose.model('Admin', admin)