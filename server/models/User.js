const { Database } = require("../data/Database");
const { validateEmail } = require("../util/EmailValidator");
const { hashPassword, validatePassword, isPasswordValid } = require('../util/PasswordValidator')

class User {
    static async login(email, password) {
        const isEmail = validateEmail(email)
        if (!isEmail) {
            throw Error('Email not valid, please put in a valid email')
        }

        const response = await Database.instance().find('email', email, 'users');
        if (response.length === 0) {
            throw Error('Email or password is incorrect');
        }
        const user = response[0];
        const isValid = isPasswordValid(password, user.password, user.salt);
        if (!isValid) {
            throw Error('Email or password is incorrect')
        }
        delete user.password;
        delete user.salt;
        return user
    }

    static async register(data) {
        const user = {...this.default(), ...data};
        const isEmail = validateEmail(user.email)
        if (!isEmail) {
            throw Error('Email not valid, please put in a valid email')
        }
        if (user.password) {
            const isPasswordValid = validatePassword(user.password);
            if (!isPasswordValid) {
                throw Error('Password must be 8 characters long, with uppercase letters, numbers and special characters')
            }
        }
        const doesEmailExists = await Database.instance().find('email', user.email, 'users');
        if (doesEmailExists.length !== 0) {
            throw Error("Email already exists")
        }
        const doesUsernameExists = await Database.instance().find('username', user.username, 'users');
        if (doesUsernameExists.length !== 0) {
            throw Error("Username already exists")
        }
        const hash = hashPassword(user.password);
        user.password = hash.hash;
        user['salt'] = hash.salt;
        const response = await Database.instance().create(user, 'users');
        delete response.password;
        delete response.salt
        return response;
    }

    static async update(data) {

    }

    static async delete(data) {
        
    }

    constructor(data) {
        const {
            username,
            firstname,
            lastname,
            email,
            password,
            isAdmin,
            isMentor,
            imageUrl,
            track,
            role
        } = data;
        this.username = username;
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.password = password;
        this.track = track;
        this.isAdmin = isAdmin;
        this.isMentor = isMentor;
        this.imageUrl = imageUrl;
        this.role = role;
    }

    static default() {
        return {
            username: null,
            firstname: null,
            lastname: null,
            email: null,
            password: null,
            isAdmin: false,
            isMentor: false,
            imageUrl: null,
            track: null,
            role: null
        }
    }
}

module.exports.User = User;