import express, { Request, Response } from 'express';
import path from 'path';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import fs from 'fs';
import blogRoutes from './routes/blogRoutes';
import projectRoutes from './routes/projectRoutes'; // Import project routes

// Load environment variables
dotenv.config();

const app = express();
app.use(cors({
  origin: '*',  // Allow all origins
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());

// Serve static files for uploaded images and videos
app.use('/uploads', express.static(path.join(process.cwd(), 'uploads')));

// Use blog and project routes
app.use('/api', blogRoutes);
app.use('/api', projectRoutes);

// Basic route to check if the server is running
app.get('/', (req: Request, res: Response) => {
  res.send('API is working for Blogs and Projects!');
});

// List all uploaded images
app.get('/images', (req: Request, res: Response) => {
  const uploadDir = path.join(process.cwd(), 'uploads');
  fs.readdir(uploadDir, (err, files) => {
    if (err) return res.status(500).json({ error: 'Unable to read directory' });

    const imageUrls = files.map(file => `${req.protocol}://${req.get('host')}/uploads/${file}`);
    res.json(imageUrls);
  });
});

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI as string, {})
  .then(() => console.log("Connected to MongoDB (projects database)"))
  .catch((err) => console.log("MongoDB connection error:", err));

// Error handling for unsupported routes
app.use((req: Request, res: Response) => {
  res.status(404).send('Not Found');
});

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
