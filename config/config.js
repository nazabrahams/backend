import { createPool } from "mysql2";
import { config } from 'dotenv'
config()

let pool = createPool({
    host: process.env.HOSTDB,
    database: process.env.DATABASE_NAME,
    user: process.env.USERDB,
    password: process.env.PASSWORDDB,
    port: process.env.PORTDB,
    multipleStatements: true,
    // connectionLimit: 50
});
// connection.on('connection', (pool) => {
//     if (!pool) throw new Error('Unable to Connect');
//     console.log('Connected to the database.');
// });
export {
    pool
};