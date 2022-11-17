const { initializeApp } = require('firebase/app');
const { getFirestore, addDoc, collection, query, where, getDocs, doc, getDoc, deleteDoc, setDoc } = require('firebase/firestore')

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
        //console.log("Document written with ID: ", docRef.id);
        return { ...data, _id: docRef.id }
    }

    async find(field, value, col) {
        const collectionRef = collection(this.db, col);
        const q = query(collectionRef, where(field, "==", value));
        const querySnapshot = await getDocs(q);
        const data = []
        querySnapshot.forEach((item) => {
            data.push(item.data());
        });
        return data
    }

    async arrayFind(field, value, col) {
        
    }

    async getDocuments(col) {
        const collectionRef = collection(this.db, col);
        const q = query(collectionRef)
        const querySnapshot = await getDocs(q);
        const data = []
        querySnapshot.forEach((item) => {
            data.push(item.data());
        });
        return data
    }

    async deleteDocument(_id, col) {
        const docRef = doc(this.db, col, _id);
        const result = await getDoc(docRef);
        if (result.exists()) {
            await deleteDoc(docRef)
            return result.data()
        }
        throw Error('Document does not exists');
    }

    async updateDoc(docId, col, data) {
        const docRef = doc(this.db, col, docId);
        const result = await getDoc(docRef);
        if (result.exists()) {
            setDoc(docRef, { ...data }, { merge: true })
        }
        throw Error('Document does not exists');
    }

    async getDoc(_id, col) {
        const docRef = doc(this.db, col, _id);
        const result = await getDoc(docRef);
        if (result.exists()) {
            return result.data()
        }
        throw Error('Document does not exists');
    }
}

module.exports.Database = Database;