import { getBookingsDb, getBookingDb, insertBookingDb, deleteBookingDb, updateBookingDB, addToCartDB } from '../model/BookingDb.js';
import { getUserDb } from '../model/UserDb.js';

const getBookings = async (req, res) => {
    res.json(await getBookingsDb());
};

const getBooking = async (req, res) => {
    res.json(await getBookingDb(req.params.id));
};

const insertBooking = async (req, res) => {
    let { treatment, date, time } = req.body;
    await insertBookingDb(treatment, date, time);
    res.send('Booking was inserted successfully');
};

const deleteBooking = async (req, res) => {
    await deleteBookingDb(req.params.id);
    res.send('Booking has been deleted');
};

const updateBooking = async (req, res) => {
    let { treatment, date, time } = req.body;
    let booking = await getBookingDb(req.params.id);
    treatment ? treatment = treatment : treatment = booking.treatment;
    date ? date = date : date = booking.date;
    time ? time = time : time = booking.time;
    await updateBookingDB(req.params.id, treatment, date, time);
    res.send('Update was successful');
};

const addToCart = async (req, res) => {
    console.log(req.body);
    let { id } = await getUserDb(req.body.user);
    console.log(id);
    await addToCartDB(req.body.id, id);
    res.json({ message: "You've added an item to cart" });
};

export { getBookings, getBooking, insertBooking, deleteBooking, updateBooking, addToCart };
