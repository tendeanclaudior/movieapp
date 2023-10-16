// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {getDatabase} from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAFZ2bfqZ10rXFPp2HTyzg-ENzrBw6QWzs',
  authDomain: 'movieapp-987ef.firebaseapp.com',
  databaseURL: 'https://movieapp-987ef-default-rtdb.firebaseio.com',
  projectId: 'movieapp-987ef',
  storageBucket: 'movieapp-987ef.appspot.com',
  messagingSenderId: '628333959567',
  appId: '1:628333959567:web:9d23cae5879451afc213fa',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);
