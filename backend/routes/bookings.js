import express from 'express';
import { createBooking, getAllBooking, getBooking } from '../controllers/bookingController.js';
import { verifyAdmin, verifyUser } from '../utils/verifyToken.js';

const router = express.Router();

// create booking
router.post('/', verifyUser,createBooking)

// get single booking
router.get('/:id', verifyUser, getBooking)

// get all booking
router.get('/', verifyAdmin, getAllBooking)

export default router;