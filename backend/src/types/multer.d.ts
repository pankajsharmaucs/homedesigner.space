import { Request } from 'express';

declare global {
  namespace Express {
    interface Request {
      file?: Express.Multer.File; // Single file
      files?: { [fieldname: string]: Express.Multer.File[] }; // Multiple files
    }
  }
}

export {}; // Ensure it's treated as a module
