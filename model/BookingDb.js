import { pool } from "../config/config.js";

const getBookingsDb = async () => {
    let [data] = await pool.query('SELECT * FROM booking');
    return data;
};

const getBookingDb = async (id) => {
    let [[data]] = await pool.query('SELECT * FROM booking WHERE booking_id = ?', [id]);
    return data;
};

const insertBookingDb = async (treatment, date, time) => {
    await pool.query(`
        INSERT INTO booking 
        (treatment, date, time)
        VALUES (?, ?, ?)
    `, [treatment, date, time]);
};

const deleteBookingDb = async (id) => {
    await pool.query('DELETE FROM booking WHERE booking_id = ?', [id]);
};

const updateBookingDB = async (id, treatment, date, time) => {
    await pool.query('UPDATE booking SET treatment = ?, date = ?, time = ? WHERE booking_id = ?', [treatment, date, time, id]);
};

const addToCartDB = async (booking_id, user_id) => {
    await pool.query('INSERT INTO cart (booking_id, user_id) VALUES (?, ?)', [booking_id, user_id]);
};

export { getBookingsDb, getBookingDb, insertBookingDb, deleteBookingDb, updateBookingDB, addToCartDB };
