import express from 'express';
import { getBookings, getBooking, insertBooking, deleteBooking, updateBooking, addToCart } from '../controller/BookController.js';
import { verifyAToken } from '../middleware/authenticate.js';

const router = express.Router();
router.post('/cart', verifyAToken, addToCart);

router
    .route('/bookings')
    .get(getBookings)       
    .post(insertBooking);   

router
    .route('/bookings/:id')
    .get(getBooking)        
    .delete(deleteBooking) 
    .patch(updateBooking); 

export default router;
