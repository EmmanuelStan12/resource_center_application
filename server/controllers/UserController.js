const { User } = require('../models/User');
const { handleResponse } = require('../util/CustomResponse');
const { issueToken } = require('../util/JSONWebToken');

module.exports.login = async (request, response) => {
    const { email, password } = request.body;
    console.log(request.body)
    try {
        const user = await User.login(email, password);
        const _id = user._id;
        const token = issueToken(_id);
        const res = handleResponse(200, { user, token }, null)
        response.status(200).json(res);
    } catch (error) {
        const res = handleResponse(404, {}, error.message)
        response.status(401).send(res);
    }
}

module.exports.register = async (request, response) => {
    const { firstname, lastname, password, email, username, track } = request.body;
    console.log(request.body)
    try {
        const user = await User.register(request.body);
        const token = issueToken(user._id);
        const res = handleResponse(201, { token, user }, null);
        response.status(res.status).send(res);  
    } catch (error) {
        const res = handleResponse(404, {}, error.message)
        response.status(res.status).send(res);
    }
    // try {
    //     const user = await User.create({ firstName, lastName, username, email, password })
    //     await sendMail(email)
    //     const res = handleResponse("otp sent successfully", true, { user })
    //     response.status(200).send(res)
    // } catch (error) {
    //     const res = handleResponse("an error occured", false, { error: error.message })
    //     response.status(404).send(res);
    // }
}

module.exports.update = async (request, response) => {

}

module.exports.delete = async (request, response) => {
    
}