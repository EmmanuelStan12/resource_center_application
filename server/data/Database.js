const { initializeApp } = require('firebase/app');
const { getFirestore, addDoc, collection, query, where } = require('firebase/firestore')

const { config } = require("../config/Configuration");

class Database {
    constructor() {
        this.app = initializeApp(config);
        this.db = getFirestore(this.app);
    }

    static instance() {
        if (this._instance == null) {
            this._instance = new Database();
        }
        return this._instance;
    }

    async create(data, col) {
        const docRef = await addDoc(collection(this.db, col), { ...data });
        console.log("Document written with ID: ", docRef.id);
        return { ...data, _id: docRef.id }
    }

    async find(param, col) {
        const userRef = collection(this.db, col);
        const q = query(userRef, where(`${param}`, "==", param));
        return q.converter.fromFirestore();
    }

    async delete(param, col) {

    }

    async update(_id, col, data) {

    }
}

module.exports.Database = Database;