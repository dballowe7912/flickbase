// MODELS
const { User } = require('../models/user');
// SERVICES
const userService = require('./user.service');

const createUser = async (email, password) => {
    try {
        // Check the email exists
        if(await User.emailTaken(email)){
            throw new Error('Sorry email is taken')
        } 
        const user = new User({
            email,
            password
        });
        await user.save();
        return user;
    } catch(error) {
        console.log(error)
    }
}

const genAuthToken = (user)=>{
    const token = user.generateAuthToken();
    return token;
}

const signInWithEmailAndPassword = async (email, password) => {
    try {
        const user = await userService.findUserByEmail(email);
        if (!user) {
            throw new Error('User does not exist')
        }
        if(!(await user.comparePassword(password))){
            throw new Error('Sorry bad password')
        }

        return user;

    } catch (error) {
        throw error
    }
} 

module.exports = {
    createUser,
    genAuthToken,
    signInWithEmailAndPassword
}