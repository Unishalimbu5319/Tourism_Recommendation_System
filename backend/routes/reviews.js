import express from 'express'
import { createReview } from'./../controllers/reviewController.js';
import { verifyUser } from '../utils/verifyToken.js';

 const router = express.Router();

 router.post('/:destinationId',verifyUser, createReview);

 export default router;