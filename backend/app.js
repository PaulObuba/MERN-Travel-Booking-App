import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from 'cookie-parser';

// Routes
import tourRoute from './routes/tours.js';
import userRoute from './routes/users.js';
import reviewRoute from './routes/reviews.js';
import bookingRoute from './routes/bookings.js';
import authRoute from './routes/auth.js';

dotenv.config();
const app = express();
const port = process.env.PORT || 8000;
const corsOptions = {
  origin: true,
  credentials: true
}

//middleware
app.use(express.json());
app.use(cors(corsOptions));
app.use(cookieParser());
app.use('/api/v1/tours', tourRoute)
app.use('/api/v1/users', userRoute)
app.use('/api/v1/reviews', reviewRoute)
app.use('/api/v1/booking', bookingRoute)
app.use('/api/v1/auth', authRoute)

// Database connetion
mongoose.set('strictQuery', false);
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    console.log('MongoDB database connected')

  } catch (error) {
    console.log('MongoDB database connection failed')
  }
}



app.listen(port, () => {
  connect();
  console.log("server listening on port", port)
})