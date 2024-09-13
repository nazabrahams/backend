import express from 'express';
import { getUsers, getUser, insertUser, deleteUser, updateUser} from '../controller/UserController.js';


const router = express.Router();

router.get('/users', getUsers); 
router.get('/users/:id', getUser); 
router.post('/users', insertUser); 
router.delete('/users/:id',deleteUser); 

export default router;