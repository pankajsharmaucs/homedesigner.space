import express from 'express';
import multer from 'multer';
import fs from 'fs';
import path from 'path';
import { getProjects, createProject } from '../controllers/projectController';

const router = express.Router();

// Define upload directory in the root of the project
const uploadDir = path.join(process.cwd(), 'uploads');

// Ensure the 'uploads' directory exists in the root
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Configure Multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir); // Save images and videos in the root 'uploads' folder
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + '-' + file.originalname);
  }
});

// File filter for images and videos
const fileFilter = (req: Express.Request, file: Express.Multer.File, cb: multer.FileFilterCallback) => {
  if (file.mimetype.startsWith('image/') || file.mimetype.startsWith('video/')) {
    cb(null, true); // Accept the file
  } else {
    cb(new Error('Only image and video files are allowed!'));
  }
};

// Initialize Multer
const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 10 * 1024 * 1024 } // Limit file size to 10MB
});

// Get all projects
router.get('/projects', getProjects);

// Post a new project with multiple images and a video
router.post(
  '/projects',
  upload.fields([
    { name: 'image1', maxCount: 1 },
    { name: 'image2', maxCount: 1 },
    { name: 'image3', maxCount: 1 },
    { name: 'image4', maxCount: 1 },
    { name: 'video', maxCount: 1 }
  ]),
  createProject
);

export default router;
