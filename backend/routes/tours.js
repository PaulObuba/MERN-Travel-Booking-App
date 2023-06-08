
import express from 'express';
import { createTour, deleteTour, getAllTour, getFeaturedTour, getSingleTour, getTourBySearch, getTourCount, updateTour } from '../controllers/tourController.js';
import { verifyAdmin } from '../utils/verifyToken.js';

const router = express.Router();

// Create New Tour
router.post('/', verifyAdmin, createTour)

// update New Tour
router.put('/:id', verifyAdmin, updateTour)

// delete New Tour
router.delete('/:id', verifyAdmin, deleteTour)

// getSingle New Tour
router.get('/:id', getSingleTour)

// getAll New Tour
router.get('/', getAllTour)

// get Tour by search
router.get('/search/getTourBySearch', getTourBySearch)

// get featured Tour
router.get('/search/getFeaturedTours', getFeaturedTour)

// get Tour Count
router.get('/search/getTourCount', getTourCount)


export default router;