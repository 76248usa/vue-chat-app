import firebase from "firebase";
import firestore from "firebase/firestore";

var config = {
  apiKey: "AIzaSyBvl9A-FiXCTIAfbYFP8xcTlrMssIepvdE",
  authDomain: "ninja-chat-16e12.firebaseapp.com",
  databaseURL: "https://ninja-chat-16e12.firebaseio.com",
  projectId: "ninja-chat-16e12",
  storageBucket: "ninja-chat-16e12.appspot.com",
  messagingSenderId: "349655569609"
};

const firebaseApp = firebase.initializeApp(config);
firebaseApp.firestore().settings({ timestampsInSnapshots: true });

export default firebaseApp.firestore();
