import { Request, Response } from 'express';
import Project from '../models/project'; // Ensure this is correctly exported from your models

// Fetch all projects from MongoDB
export const getProjects = async (req: Request, res: Response) => {
  try {
    const projects = await Project.find(); // Fetch all project documents
    res.json(projects);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch projects', error: err });
  }
};

// Function to create a new project
export const createProject = async (req: Request, res: Response) => {
  const { name, description, youtubeLink } = req.body;

  // Validate required fields
  if (!name || !description) {
    return res.status(400).json({ message: 'Name and description are required' });
  }

  // Extract multiple image and video URLs from req.files
  const files = (req.files || {}) as { [fieldname: string]: Express.Multer.File[] };
  const uploadedFiles: { [key: string]: string } = {};

  ['image1', 'image2', 'image3', 'image4', 'video'].forEach((field) => {
    if (files[field] && files[field][0]) {
      uploadedFiles[field] = files[field][0].path; // Store the file path
    } else {
      uploadedFiles[field] = ''; // Ensure every field has a value
    }
  });

  try {
    const newProject = new Project({
      name,
      description,
      image1: uploadedFiles.image1,
      image2: uploadedFiles.image2,
      image3: uploadedFiles.image3,
      image4: uploadedFiles.image4,
      video: uploadedFiles.video,
      youtubeLink: youtubeLink || '', // Ensure empty string if not provided
    });

    await newProject.save(); // Save to MongoDB

    res.status(201).json(newProject); // Send response
  } catch (err) {
    res.status(500).json({ message: 'Error creating project', error: err });
  }
};
