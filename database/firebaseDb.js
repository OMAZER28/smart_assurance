import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDvlBQ-TapHuF0JRY3kmPEA5oX7wrolTbc",
    authDomain: "smart-assurance-13d0e.firebaseapp.com",
    databaseURL: "https://smart-assurance-13d0e.firebaseio.com",
    projectId: "smart-assurance-13d0e",
    storageBucket: "smart-assurance-13d0e.appspot.com",
    messagingSenderId: "114355197008",
    appId: "1:114355197008:web:b962dcf6d65f56719ced55",
};

firebase.initializeApp(firebaseConfig);

firebase.firestore();

export default firebase;