// src/utils/api.ts
import axios from 'axios';
import { BASE_API_URL, GET_ALL_BLOG, CREATE_ALL_BLOG } from './constants';

// Create axios instance
const api = axios.create({
  baseURL: BASE_API_URL, // Use the full URL including the protocol
});

// Fetch all blogs
export const fetchBlogs = async () => {
  try {
    const response = await api.get(GET_ALL_BLOG); // Only append the relative path
    console.log(response);
    
    return response.data;
  } catch (error) {
    console.error('Error fetching blogs:', error);
    throw error;
  }
};

// Create a new blog
export const createBlog = async (blogData: any) => {
  try {
    const response = await api.post(CREATE_ALL_BLOG, blogData); // Post to the relative path
    return response.data;
  } catch (error) {
    console.error('Error creating blog:', error);
    throw error;
  }
};
