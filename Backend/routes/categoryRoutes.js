import express from 'express';
import { addCategory } from '../controllers/categoryController.js';
import { upload } from '../uploads/imageUpload.js';

const router = express.Router();

router.post('/add', upload.single("categoryImage"), addCategory);

export default router;