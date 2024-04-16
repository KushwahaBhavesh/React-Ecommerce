import mongoose from 'mongoose'

const connectDB = async () => {
  try {
    const URI = process.env.URI
    const conn = await mongoose.connect(URI);
    console.log("Database connected");
  } catch (e) {
    console.log('DataBase error:' + e);
  }
}
 
export default connectDB; 