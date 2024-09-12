import express from 'express';
import bookController from './routes/BookController.js';

const router = express.Router

router.get('/',bookController.getBookings)
router.get('/:id',bookController.getBooking)
router.post('/',bookController.insertBooking)
router.put('/:id',bookController.updateBooking)
router.delete('/:id',bookController.deleteBooking)





export default router;
