import express from 'express';
import { getUsers, getUser, insertUser, deleteUser, updateUser, loginUser } from '../controller/UserController.js';
import { checkUser } from '../middleware/authenticate.js';

const router = express.Router();

router.post('/login', checkUser, loginUser);

router
    .route('/users')
        .get(getUsers)       
        .post(insertUser);   

router
    .route('/users/:id')
    .get(getUser)       
    .delete(deleteUser) 
    .patch(updateUser); 
export default router;
