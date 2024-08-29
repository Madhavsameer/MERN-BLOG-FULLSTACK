import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';
import postRoutes from './routes/post.route.js';
import commentRoutes from './routes/comment.route.js';
import cookieParser from 'cookie-parser';
import path from 'path';
import axios from 'axios'; // Import Axios for HTTP requests

dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log('MongoDb is connected');
  })
  .catch((err) => {
    console.log(err);
  });

const __dirname = path.resolve();

const app = express();

app.use(express.json());
app.use(cookieParser());

// Define the Keep-Alive function
const keepAlive = async () => {
  try {
    const response = await axios.get('https://mern-blog-59mo.onrender.com/api/user'); // Ping any of your existing API endpoints
    if (response.status === 200) {
      console.log('Keep-alive ping successful.');
    } else {
      console.log(`Unexpected status code: ${response.status}`);
    }
  } catch (error) {
    console.error(`Error in keep-alive ping: ${error.message}`);
  }
};

// Set an interval to ping the server every 5 minutes (300,000 ms)
setInterval(keepAlive, 300000);

app.listen(3000, () => {
  console.log('Server is running on port 3000!');
});

app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/post', postRoutes);
app.use('/api/comment', commentRoutes);

app.use(express.static(path.join(__dirname, '/client/dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
});

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
