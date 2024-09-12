import { compare } from "bcrypt";
import { getUserDb } from "../model/UserDb.js";
import jwt from 'jsonwebtoken';
import { config } from 'dotenv';
config();

const checkUser = async (req, res, next) => {
    const { email, password } = req.body;
    let user = await getUserDb(email);
    
    if (!user) {
        return res.send('User not found');
    }

    let hashedPassword = user.password;
    let result = await compare(password, hashedPassword);

    if (result === true) {
        let token = jwt.sign({ email: email }, process.env.SECRET_KEY, { expiresIn: '1h' });
        req.body.token = token;
        next();
    } else {
        res.send('Password incorrect');
    }
};

const verifyAToken = (req, res, next) => {
    let { cookie } = req.headers;
    let token = cookie && cookie.split('=')[1];

    jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
        if (err) {
            res.json({ message: 'Token has expired' });
            return;
        }
        req.body.user = decoded.email;
        next();
    });
};

export { checkUser, verifyAToken };
