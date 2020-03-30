import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCk2TEqET6TpXkEUSZ2Oh5G6dCInjzSPK4",
    authDomain: "smart-assurance-a6c79.firebaseapp.com",
    databaseURL: "https://smart-assurance-a6c79.firebaseio.com",
    projectId: "smart-assurance-a6c79",
    storageBucket: "smart-assurance-a6c79.appspot.com",
    messagingSenderId: "335446180135",
    appId: "1:335446180135:web:6150040eb8e1081af76902",
};

firebase.initializeApp(firebaseConfig);

firebase.firestore();

export default firebase;