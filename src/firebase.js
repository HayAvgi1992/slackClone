import firebase from 'firebase'


const firebaseConfig = {
  apiKey: "AIzaSyBEUimYODexn619PzFKVJwnZO1go1sxiVw",
  authDomain: "slack-clone-challenge-4f32a.firebaseapp.com",
  projectId: "slack-clone-challenge-4f32a",
  storageBucket: "slack-clone-challenge-4f32a.appspot.com",
  messagingSenderId: "348812136269",
  appId: "1:348812136269:web:6f56de1930ef9416467104"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;