// src/routes/blogRoutes.ts
import express from 'express';
import multer from 'multer';
import { getBlogs, createBlog } from '../controllers/blogController';

const router = express.Router();

// Set up multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage });

// Get all blogs
router.get('/blog', getBlogs);

// Post a new blog with multiple images
router.post('/blog', upload.fields([
  { name: 'image1', maxCount: 1 },
  { name: 'image2', maxCount: 1 },
  { name: 'image3', maxCount: 1 },
  { name: 'image4', maxCount: 1 }
]), createBlog);

export default router;
