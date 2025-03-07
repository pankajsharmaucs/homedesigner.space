
export const BASE_URL = window.location.hostname === 'localhost'
    ? 'https://www.homedesigner.space'  // Local development URL
    : 'https://www.homedesigner.space';  // Production URL


export const BASE_IMAGE_URL = window.location.hostname === 'localhost'
    ? 'https://www.homedesigner.space'  // Local development URL
    : 'https://www.homedesigner.space';  // Production URL


export const BASE_API_URL = window.location.hostname === 'localhost'
    ? 'https://www.homedesigner.space'  // Local development URL
    // ? 'https://www.homedesigner.space'  // Local development URL
    : 'https://www.homedesigner.space';  // Production URL

export const GET_ALL_BLOG = window.location.hostname === 'localhost'
    ? '/api/blog'  // Local development URL
    : '/backend/api/blog';  // Production URL

export const CREATE_ALL_BLOG = window.location.hostname === 'localhost'
    ? '/api/blog'  // Local development URL
    : '/backend/api/blog';  // Production URL

export const GET_ALL_PROJECTS = window.location.hostname === 'localhost'
    ? '/backend/api/projects'  // Local development URL
    : '/backend/api/projects';  // Production URL

export const CREATE_PROJECT = window.location.hostname === 'localhost'
    ? '/backend/api/projects'  // Local development URL
    : '/backend/api/projects';  // Production URL

export const DELETE_PROJECT = window.location.hostname === 'localhost'
    ? '/backend/api/projects'  // Local development URL
    : '/backend/api/projects';  // Production URL

export const WEBSITE_NAME = window.location.hostname === 'localhost'
    ? 'HOME'  // Local development URL
    : 'Home Designer';  // Production URL

export const WEBSITE_TITLE = window.location.hostname === 'localhost'
    ? 'HOME'  // Local development URL
    : "Home Designer - Furniture Export since 1995";  // Production URL