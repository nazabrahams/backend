import { getUsersDb, getUserDb, insertUserDb, deleteUserDb, updateUserDB } from '../model/UserDb.js';
import { hash } from 'bcrypt';

const getUsers = async (req, res) => {
    res.json(await getUsersDb());
};

const getUser = async (req, res) => {
    res.json(await getUserDb(req.params.id));
};

const insertUser = async (req, res) => {
    let { email, password, first_name, surname } = req.body;
    let hashedP = await hash(password, 10);
    await insertUserDb(email, hashedP, first_name, surname);
    res.send('Data was inserted successfully');
};

const deleteUser = async (req, res) => {
    await deleteUserDb(req.params.id);
    res.send('User has been deleted');
};

const updateUser = async (req, res) => {
    let { id, email, first_name, surname } = req.body;

    let user = await getUserDb(req.params.id);
    email = email ? email : user.email;
    first_name = first_name ? first_name : user.first_name;
    surname = surname ? surname : user.surname;

    await updateUserDB(req.params.id, email, first_name, surname);
    res.send('Update was successful');
};

const loginUser = (req, res) => {
    res.json({
        message: "You have signed in!!",
        token: req.body.token
    });
};

export { getUsers, getUser, insertUser, deleteUser, updateUser, loginUser };
