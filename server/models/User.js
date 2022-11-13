const { Database } = require("../data/Database");
const { hashPassword } = require('../util/PasswordValidator')

class User {
    static async login(email, password) {
        const user = await Database.instance().find(email, 'users');
        console.log(user)
    }

    static async register(data) {
        const user = {...this.default(), ...data}
        const hash = hashPassword(user.password);
        user.password = hash.hash;
        user['salt'] = hash.salt;
        const u = await Database.instance().create(user, 'users');
        console.log(u)
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
            isValidated,
            isAdmin,
            isMentor,
            imageUrl
        } = data;
        this.username = username;
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.password = password;
        this.isValidated = isValidated;
        this.isAdmin = isAdmin;
        this.isMentor = isMentor;
        this.imageUrl = imageUrl;
    }

    static default() {
        return {
            username: null,
            firstname: null,
            lastname: null,
            email: null,
            password: null,
            isValidated: false,
            isAdmin: false,
            isMentor: false,
            imageUrl: null
        }
    }
}

module.exports.User = User;