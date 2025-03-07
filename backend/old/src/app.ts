import express, { Request, Response } from 'express';
import path from 'path';
import mongoose from 'mongoose';
import blogRoutes from './routes/blogRoutes';  // Make sure you have these routes defined in your blogRoutes.ts
import dotenv from 'dotenv';
import cors from 'cors';

// Load environment variables from .env file
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Serve static files for uploaded images (e.g., if the image is uploaded to the `uploads/` folder)
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Use the routes defined for blogs
app.use('/backend/api', blogRoutes);  // Make sure your blog routes are set up properly

// Basic route for testing if server is up
app.get('/', (req: Request, res: Response) => {
  res.send('Blog API is working!');
});

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI as string, { })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("MongoDB connection error:", err));

// Error handling for unsupported routes
app.use((req: Request, res: Response) => {
  res.status(404).send('Not Found');
});

// Start the server on port 4000
const port = process.env.PORT || 4000;  // Use a default port if not defined in the .env file
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
