import express from 'express';
import { getUsers, getUser, insertUser, deleteUser, updateUser, loginUser } from '../controller/UserController.js';
import { checkUser } from '../middleware/authenticate.js';

const router = express.Router();

// Login route with authentication middleware
router.post('/login', checkUser, loginUser);

// Routes for managing users
router
    .route('/users')
    .get(getUsers)       // Get all users
    .post(insertUser);   // Insert a new user

router
    .route('/users/:id')
    .get(getUser)        // Get a single user by ID
    .delete(deleteUser) // Delete a user by ID
    .patch(updateUser); // Update user information by ID

export default router;
