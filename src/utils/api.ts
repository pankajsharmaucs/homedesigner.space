// src/utils/api.ts
import axios from 'axios';
import { BASE_API_URL, CREATE_PROJECT, GET_ALL_PROJECTS } from './constants';

// Create axios instance
const api = axios.create({
  baseURL: BASE_API_URL, // Use the full URL including the protocol
});


// Fetch all Projects
export const fetchProjects = async () => {
  try {
    const response = await api.get(GET_ALL_PROJECTS); // Only append the relative path
    // console.log(response);
    return response.data;
  } catch (error) {
    console.error('Error fetching Projects:', error);
    throw error;
  }
};


// Create a new Projects
export const createProject = async (data: any) => {
  try {
    const response = await api.post(CREATE_PROJECT, data); // Post to the relative path
    return response.data;
  } catch (error) {
    console.error('Error creating Projects:', error);
    throw error;
  }
};


