import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

 const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDOx7UxrVyGHF79TK8jkTON4qUBAljeMjw",
  authDomain: "first-project-44e72.firebaseapp.com",
  projectId: "first-project-44e72",
  storageBucket: "first-project-44e72.appspot.com",
  messagingSenderId: "895606042783",
  appId: "1:895606042783:web:d0939eaf59652bb88eb2aa",
  measurementId: "G-TMQNCQNFJH"
 });
 const auth=firebase.auth();

 export{auth};