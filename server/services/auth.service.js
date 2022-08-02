const { User } = require('../models/user')

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

module.exports = {
    createUser,
    genAuthToken
}