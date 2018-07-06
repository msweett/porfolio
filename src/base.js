import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCe4ntxPv8ZXcbJVyrPcMUPUBI8Pzd3KjA",
  authDomain: "my-first-site-c927d.firebaseapp.com",
  databaseURL: "https://my-first-site-c927d.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
