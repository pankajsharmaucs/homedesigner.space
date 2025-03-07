import { Request, Response } from 'express';
import fs from 'fs';
import path from 'path';
import Project from '../models/project';
import { Document } from 'mongoose';

// Define the expected Mongoose document type
interface ProjectDocument extends Document {
  _id: string;
  title: string;
  description: string;
  youtubeLink?: string;
  image1?: string;
  image2?: string;
  image3?: string;
  image4?: string;
  video?: string;
}

// Fetch all projects from MongoDB
export const getProjects = async (req: Request, res: Response): Promise<void> => {
  try {
    const projects = await Project.find();
    res.status(200).json(projects);
  } catch (err) {
    console.error('Error fetching projects:', err);
    res.status(500).json({ message: 'Failed to fetch projects', error: (err as Error).message });
  }
};

// Create a new project
export const createProject = async (req: Request, res: Response): Promise<void> => {
  try {
    const { title, description, youtubeLink } = req.body;

    if (!title || !description) {
      res.status(400).json({ message: 'Title and description are required' });
      return;
    }

    // Step 1: Create a new project document (without file paths initially)
    const newProject = new Project({
      title,
      description,
      youtubeLink,
      image1: null,
      image2: null,
      image3: null,
      image4: null,
      video: null,
    });

    // Save to get the project ID
    const savedProject = (await newProject.save()) as ProjectDocument;
    const projectId = savedProject._id.toString();

    // Step 2: Create a folder named by the project ID
    const projectUploadDir = path.join(process.cwd(), 'uploads', projectId);
    if (!fs.existsSync(projectUploadDir)) {
      fs.mkdirSync(projectUploadDir, { recursive: true });
    }

    console.log('Uploaded files:', req.files);

    const files = req.files as { [fieldname: string]: Express.Multer.File[] } | undefined;
    let updatedProjectData: Partial<ProjectDocument> = {};

    // Step 3: Move uploaded files to the project folder and save paths
    if (files) {
      const moveFile = (file: Express.Multer.File, fieldName: keyof ProjectDocument) => {
        const newFilePath = path.join(projectUploadDir, file.filename);
        fs.renameSync(file.path, newFilePath);
        updatedProjectData[fieldName] = `/uploads/${projectId}/${file.filename}`;
      };

      if (files['image1']?.[0]) moveFile(files['image1'][0], 'image1');
      if (files['image2']?.[0]) moveFile(files['image2'][0], 'image2');
      if (files['image3']?.[0]) moveFile(files['image3'][0], 'image3');
      if (files['image4']?.[0]) moveFile(files['image4'][0], 'image4');
      if (files['video']?.[0]) moveFile(files['video'][0], 'video');
    }

    // Step 4: Update the project with the correct file paths **before sending the response**
    const updatedProject = await Project.findByIdAndUpdate(projectId, updatedProjectData, { new: true });

    res.status(201).json({ message: 'Project created successfully', project: updatedProject });
  } catch (err) {
    console.error('Error creating project:', err);
    res.status(500).json({ message: 'Error creating project', error: (err as Error).message });
  }
};
