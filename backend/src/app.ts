import express, { Request, Response } from 'express';
import path from 'path';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import fs from 'fs';
import projectRoutes from './routes/projectRoutes';

// Load environment variables
dotenv.config();

const app = express();

app.use(cors());

app.use(express.json());

// Define the upload directory **in the root of the project**
const uploadDir = path.join(process.cwd(), 'uploads');

// Ensure the 'uploads' directory exists in the root
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Serve static files for uploaded images and videos from the root uploads folder
//app.use('/uploads', express.static(uploadDir));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Use blog and project routes
app.use('/api', projectRoutes);

// Basic route to check if the server is running
app.get('/', (req: Request, res: Response) => {
  res.send('API is working for Blogs and Projects!');
});

// List all uploaded images
app.get('/images', (req: Request, res: Response) => {
  fs.readdir(uploadDir, (err, files) => {
    if (err) return res.status(500).json({ error: 'Unable to read directory' });

    const imageUrls = files.map(file => `${req.protocol}://${req.get('host')}/uploads/${file}`);
    res.json(imageUrls);
  });
});

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI as string)
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
