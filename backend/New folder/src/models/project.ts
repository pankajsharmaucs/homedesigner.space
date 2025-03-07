import mongoose, { Document, Schema } from 'mongoose';

// Define the Project schema
const projectSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    image1: { type: String, default: '' },
    image2: { type: String, default: '' },
    image3: { type: String, default: '' },
    image4: { type: String, default: '' },
    video: { type: String, default: '' },
    youtubeLink: { type: String, default: '' },
  },
  { timestamps: true } // Automatically add createdAt and updatedAt fields
);

// Define the Project interface for TypeScript
export interface Project extends Document {
  name: string;
  description: string;
  image1?: string;
  image2?: string;
  image3?: string;
  image4?: string;
  video?: string;
  youtubeLink?: string;
}

// Create a Project model based on the schema
const Project = mongoose.model<Project>('Project', projectSchema);

export default Project;
