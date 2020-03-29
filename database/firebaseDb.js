import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDIaf21DVzRWfIoKy5hADilhSLt1PbvS1Y",
    authDomain: "smart-assurance-dbc47.firebaseapp.com",
    databaseURL: "https://smart-assurance-dbc47.firebaseio.com",
    projectId: "smart-assurance-dbc47",
    storageBucket: "smart-assurance-dbc47.appspot.com",
    messagingSenderId: "426379825851",
    appId: "1:426379825851:web:ee5b00709a697821328f9e",
};

firebase.initializeApp(firebaseConfig);

firebase.firestore();

export default firebase;