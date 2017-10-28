import Rebase from 're-base';
import firebase from 'firebase';
// Initalize Firebase
const config = {
        apiKey: "AIzaSyDXU7hnX0YBBjzn4e55od8NR1We_8K4QDA",
        authDomain: "chordify-1103.firebaseapp.com",
        databaseURL: "https://chordify-1103.firebaseio.com",
        projectId: "chordify-1103",
        storageBucket: "",
        messagingSenderId: "570514070895"
      };

const app = firebase.initializeApp(config)
const base = Rebase.createClass(app.database())

export { base }