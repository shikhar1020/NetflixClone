import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBfdDMdRf_YA75eYALQnMijYFcprmx6XS0",
  authDomain: "netflix-clone-500d3.firebaseapp.com",
  projectId: "netflix-clone-500d3",
  storageBucket: "netflix-clone-500d3.appspot.com",
  messagingSenderId: "753374719639",
  appId: "1:753374719639:web:5580e04e58f646992003d2",
  measurementId: "G-E6ZCNCB4BH",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { auth };
export default db;
