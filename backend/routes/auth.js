import express from 'express';
import { login, register } from '../controllers/authContoller.js';

const router = express.Router();

// User register 
router.post('/register', register)

// User login
router.post('/login', login)

export default router;