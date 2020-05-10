import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBFS7taODWNfWZvR51CL94bWAQMYvCsKug",
    authDomain: "pfa-sa.firebaseapp.com",
    databaseURL: "https://pfa-sa.firebaseio.com",
    projectId: "pfa-sa",
    storageBucket: "pfa-sa.appspot.com",
    messagingSenderId: "946565902455",
    appId: "1:946565902455:web:1452a0aad6e30d00d3d672",

};

firebase.initializeApp(firebaseConfig);

firebase.firestore();

export default firebase;