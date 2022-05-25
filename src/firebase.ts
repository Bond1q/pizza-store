// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyBkDEc9VcKNH8te8aorERW92uCOajtwOAA",
	authDomain: "pizza-store-31ba4.firebaseapp.com",
	projectId: "pizza-store-31ba4",
	storageBucket: "pizza-store-31ba4.appspot.com",
	messagingSenderId: "779605830587",
	appId: "1:779605830587:web:758b70ce5962ae0d17329e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore()