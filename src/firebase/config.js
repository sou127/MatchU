import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

import 'firebase/storage'

const firebaseConfig = {
    apiKey: YOUR_API_KEY,
    authDomain: YOUR_AUTH_DOMAIN,
    projectId: YOUR_PROJECT_ID,
    storageBucket: YOUR_BUCKET_ID,
    messagingSenderId: YOUR_MESSENGER,
    appId: YOUR_APP_ID
};

firebase.initializeApp(firebaseConfig)

const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()

const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, projectStorage, timestamp }
