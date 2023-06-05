import express from 'express';
import { deleteUser, getAllUser, getSingleUser, updateUser } from '../controllers/userContoller.js';

import { verifyAdmin, verifyUser } from '../utils/verifyToken.js';


const router = express.Router();

// update user
router.put('/:id', verifyUser, updateUser)

// delete user
router.delete('/:id', verifyUser, deleteUser)

// getSingle user
router.get('/:id', verifyUser, getSingleUser)

// getAll user
router.get('/', verifyAdmin, getAllUser)

export default router;