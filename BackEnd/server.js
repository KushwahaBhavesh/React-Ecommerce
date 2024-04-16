import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan';
import connectDB from './config/db.js';
import authRoutes from './Routes/authRoute.js'
import cors from 'cors'



// configure Dotenv
dotenv.config()

// Database connection
connectDB();

// rest object
const app = express();




// MiddleWare
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))


// routes API
app.use('/api/v1/auth',authRoutes)

// rest api 
app.get('/', (req, res) => {
  res.send({
    msg: "hello kushwaha Bhavesh"
  })
})

// portNumber
const port = process.env.PORT || 8000
app.listen(port, () => {
  console.log("server running on", port);
})