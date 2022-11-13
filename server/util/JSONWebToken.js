const jwt = require('jsonwebtoken');
const { handleResponse } = require('./CustomResponse');

module.exports.issueToken = (_id, expiresIn = '1d') => {
    const payload = {
        sub: _id,
        iat: Date.now()
    };

    const token = jwt.sign(payload, process.env.JWT_KEY, {
        expiresIn,
        algorithm: 'HS256'
    })

    return {
        token: `Bearer ${token}`,
        expiresIn
    }
}

const verifyJWTMiddleware = (request, response, next) => {
    const tokenParts = request.headers.authorization.split(" ");
    const regex = /$*.$*.$*/;
    if (
        tokenParts[0] === "Bearer" &&
        regex.test(tokenParts[1])
    ) {
        try {
            const token = jsonwebtoken.verify(token, process.env.JWT_KEY, {
                algorithms: ["HS256"],
            });
            request.token = token;
            next();
        } catch (error) {
            next(error);
        }
    } else {
        const res = handleResponse(402, null, 'Unauthorized')
        next(res);
    }
};

const verifyJWT = (request) => {
    const tokenParts = request.headers.authorization.split(" ");
    const token = tokenParts[1]
    try {
        if (tokenParts[0] === "Bearer") {
            const payload = jsonwebtoken.verify(token, process.env.JWT_KEY, {
                algorithms: ["HS256"],
            });
            if (payload) {
                return payload
            }
            throw Error("invalid token")
        } else {
            throw Error("Unauthorized")
        }
    } catch (error) {
        throw error;
    }
}

module.exports = {
    verifyJWT,
    verifyJWTMiddleware
}