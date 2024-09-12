import express from 'express';
import { getBookings, getBooking, insertBooking, deleteBooking, updateBooking, addToCart } from '../controller/bookingController.js';
const router = express.Router();
import { verifyAToken } from '../middleware/authenticate.js';

// Route to add a booking to the cart with authentication
router.post('/cart', verifyAToken, addToCart);

// Routes for managing bookings
router
    .route('/bookings')
    .get(getBookings)       // Get all bookings
    .post(insertBooking);   // Add a new booking

router
    .route('/bookings/:id')
    .get(getBooking)        // Get a single booking by ID
    .delete(deleteBooking) // Delete a booking by ID
    .patch(updateBooking); // Update booking information by ID

export default router;
