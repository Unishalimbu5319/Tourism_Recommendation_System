import express from 'express';
import {
  createUser,
  updateUser,
  deleteUser,
  getSingleUser,
  getAllUser,
} from '../controllers/userController.js';
const router = express.Router();

import {  verifyAdmin, verifyUser } from "../utils/verifyToken.js" ;

//update User
router.put('/:id', verifyUser, updateUser);

// delete User
router.delete('/:id', verifyUser, deleteUser);

// get single user
router.get('/:id', verifyUser, getSingleUser);

// get all users
router.get('/',  verifyAdmin, getAllUser);

export default router;
