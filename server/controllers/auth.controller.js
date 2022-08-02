const { authService } = require('../services');
const httpStatus = require('http-status');

const authController = {
    async register(req, res, next){
        try {
            const { email, password } = req.body;
            const user = await authService.createUser(email, password);
            const token = await authService.genAuthToken(user);

            
            // verification email


            // cookie
            res.cookie('x-access-token', token)
            .status(httpStatus.CREATED).send({
                user,
                token
            })
        }
        catch(error){
            res.status(httpStatus.BAD_REQUEST).send(error.message)
        }
    }
}

module.exports = authController;