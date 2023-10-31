import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs';

// sign up route 
export const signup = async (req, res, next) => {

    // create a user model
    const { username, email, password } = req.body;
    
    //give authentication of password using hashed password 
    const hashedPassword = bcryptjs.hashSync(password, 10);
    const newUser = new User({ username, email, password: hashedPassword });
    
    // give try catch for if in background erro or duplicate occurence then give a error message
    try {
        await newUser.save();
        res.status(201).json('User created successfully!');
    } catch (error) {
        next(error);
    }
};
