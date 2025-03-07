import { Request, Response } from 'express';
import Blog from '../models/blog'; // Import the Blog model to interact with MongoDB

// Fetch all blogs from MongoDB
export const getBlogs = async (req: Request, res: Response) => {
  try {
    const blogs = await Blog.find(); // Fetch all blog documents from the MongoDB collection
    res.json(blogs); // Send the blogs as a response
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch blogs', error: err });
  }
};

// Function to create a new blog post
export const createBlog = async (req: Request, res: Response) => {
  const { title, content } = req.body;
  const imageUrl = req.file ? req.file.path : undefined;  // Get image URL from the file upload

  try {
    const newBlog = new Blog({
      title,
      content,
      imageUrl,  // Save the image URL in MongoDB
    });

    await newBlog.save();  // Save the new blog to MongoDB

    res.status(201).json(newBlog);  // Send back the created blog as a response
  } catch (err) {
    res.status(500).json({ message: 'Error creating blog', error: err });
  }
};
