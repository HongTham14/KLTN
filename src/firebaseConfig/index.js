// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAttXLWU6bcZsOX5XC5fhxUpwuY53AfBfk',
  authDomain: 'learn-firebase-12454.firebaseapp.com',
  databaseURL:
    'https://learn-firebase-12454-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'learn-firebase-12454',
  storageBucket: 'learn-firebase-12454.appspot.com',
  messagingSenderId: '1079174683510',
  appId: '1:1079174683510:web:2df63e02935ee8cdf27857',
}
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export default db

// Initialize Firebase
