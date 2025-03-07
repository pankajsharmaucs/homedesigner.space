// types/multer.d.ts
import { Request } from 'express';
import { File } from 'multer';  // Correct import for File type from multer

declare global {
  namespace Express {
    interface Request {
      file?: File;
    }
  }
}
