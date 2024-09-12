import { pool } from "../config/config.js";

const getUsersDb = async () => {
    let [data] = await pool.query('SELECT * FROM user');
    return data;
};

const getUserDb = async (email) => {
    let [[data]] = await pool.query('SELECT * FROM user WHERE email = ?', [email]);
    return data;
};

const insertUserDb = async (email, password, first_name, surname) => {
    await pool.query(`
        INSERT INTO user 
        (email, password, first_name, surname)
        VALUES (?, ?, ?, ?)
        `, [email, password, first_name, surname]);
};

const deleteUserDb = async (id) => {
    await pool.query('DELETE FROM user WHERE ID = ?', [id]);
};

const updateUserDB = async (id, email, first_name, surname) => {
    await pool.query('UPDATE user SET email = ?, first_name = ?, surname = ? WHERE ID = ?', [email, first_name, surname, id]);
};

export { getUsersDb, getUserDb, insertUserDb, deleteUserDb, updateUserDB };
