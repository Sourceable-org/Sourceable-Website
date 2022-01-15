import * as firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAfKAkm0RgnQibEfKVDAJw7jhJIXi2dl3s",
  authDomain: "sourcable-34a9c.firebaseapp.com",
  projectId: "sourcable-34a9c",
  storageBucket: "sourcable-34a9c.appspot.com",
  messagingSenderId: "510047313365",
  appId: "1:510047313365:web:d6d8c329423107867f315c",
  measurementId: "G-YNJFNSNQJR",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export default app;
