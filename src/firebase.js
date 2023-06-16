import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

// Add your Firebase configuration here
const firebaseConfig = {
  apiKey: "AIzaSyBhGNFyFdzCLxm8V9436Eujab073-4NgX4",
  authDomain: "claystonetest-caba7.firebaseapp.com",
  projectId: "claystonetest-caba7",
  storageBucket: "claystonetest-caba7.appspot.com",
  messagingSenderId: "415130277174",
  appId: "1:415130277174:web:7a10d80784205626d58f97",
  measurementId: "G-XHTBBJF91N"
};

firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();

export default firestore;