import mongoose, { Document, Schema } from 'mongoose';

// Define the Blog schema
const blogSchema = new Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    imageUrl: { type: String, default: '' }, // Optional image URL
  },
  { timestamps: true } // Automatically add createdAt and updatedAt fields
);

// Create a Blog model based on the schema
const Blog = mongoose.model<Blog>('Blog', blogSchema);

// Define the Blog interface for TypeScript
export interface Blog extends Document {
  title: string;
  content: string;
  imageUrl?: string;
}

export default Blog;
