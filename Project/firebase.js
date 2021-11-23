// Import the functions you need from the SDKs you need

import * as firebase from "firebase";
import {getDatabase, ref, set, push} from "firebase/database"
import { Alert } from "react-native";
// import initializeApp from "@react-native-firebase/app"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDFI56RvpChVCtoVHIvauTPvjOdlYMS3h0",
  authDomain: "my-app-cba3c.firebaseapp.com",
  databaseURL: "https://my-app-cba3c-default-rtdb.firebaseio.com",
  projectId: "my-app-cba3c",
  storageBucket: "my-app-cba3c.appspot.com",
  messagingSenderId: "827123742055",
  appId: "1:827123742055:web:7633ba0a38ee209e3eabc2"
};
// Initialize Firebase

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

// const app = initializeApp(firebaseConfig)
const auth = firebase.auth()
// Initialize Firebas
// const apps = initializeApp(firebaseConfig);
export {auth};

const AddReview = () => {
  const db = getDatabase();
  const ReviewListRef = ref(db, 'review');
  const newReviewRef = push(ReviewListRef);
  set(newReviewRef, {
    "title" : "Adobo",
    "price" : "ahsdia"
  });
  Alert.alert('review added')
}

export{AddReview};