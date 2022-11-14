const { Database } = require("../data/Database");
const { hashPassword, validatePassword, isPasswordValid } = require('../util/PasswordValidator')

class User {
    static async login(email, password) {
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
        const doesUserExists = await Database.instance().find('email', user.email, 'users');
        console.log(doesUserExists)
        if (doesUserExists.length !== 0) {
            throw Error("User already exists")
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