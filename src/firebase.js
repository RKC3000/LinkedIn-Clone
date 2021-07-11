import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBnIyVdUOfe6h6Wam38jVd7a7EcBcyYsnE",
    authDomain: "linkedin-clone-eff64.firebaseapp.com",
    projectId: "linkedin-clone-eff64",
    storageBucket: "linkedin-clone-eff64.appspot.com",
    messagingSenderId: "483544789046",
    appId: "1:483544789046:web:a26f68c4e85dabc728e897"
};
  
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };