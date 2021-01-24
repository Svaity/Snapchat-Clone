import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCSE1hWk583SoBacO2yOve1Uk8NJHQ2A-E",
    authDomain: "snapchat-clone-d52ec.firebaseapp.com",
    projectId: "snapchat-clone-d52ec",
    storageBucket: "snapchat-clone-d52ec.appspot.com",
    messagingSenderId: "1081585961538",
    appId: "1:1081585961538:web:4557402c9ed73cba517bdb"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore()
  const auth = firebase.auth()
  const storage = firebase.storage()
  const provider = new firebase.auth.GoogleAuthProvider()

  export {db, auth, storage, provider};