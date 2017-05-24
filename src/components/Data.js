import firebase from 'firebase';


firebase.initializeApp({
      apiKey: "AIzaSyBj6l9bhHS69NFf4-eCocrn8LXkXcRuZ_I",
      authDomain: "flatworm-78032.firebaseapp.com",
      databaseURL: "https://flatworm-78032.firebaseio.com",
      projectId: "flatworm-78032",
      storageBucket: "flatworm-78032.appspot.com",
      messagingSenderId: "7699426384"
});
const database = firebase.database();

export default database;