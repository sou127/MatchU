import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyAFAbT8VffBjK8ou2c3_9GEAKddYAUXwT4",
    authDomain: "studydojo-2472b.firebaseapp.com",
    projectId: "studydojo-2472b",
    storageBucket: "studydojo-2472b.appspot.com",
    messagingSenderId: "447702884901",
    appId: "1:447702884901:web:c686f483f62f5a9c1655cc"
};

firebase.initializeApp(firebaseConfig)

const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()

const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, projectStorage, timestamp }