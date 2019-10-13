// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from 'firebase/app'

// Add the Firebase products that you want to use
// import "firebase/auth";
import 'firebase/database'

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyBNDkG9ONPFJjQq2ouTzmy_dSt_fepB-Bs',
  authDomain: 'city-92e17.firebaseapp.com',
  databaseURL: 'https://city-92e17.firebaseio.com',
  projectId: 'city-92e17',
  storageBucket: '',
  messagingSenderId: '893204518305',
  appId: '1:893204518305:web:5f96c21380e8a1ec1567e0'
}
// Initialize Firebase
let firebaseApp = firebase.initializeApp(firebaseConfig)
let firebaseDB = firebaseApp.database()

export default firebaseDB
