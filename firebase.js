import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, query, where, updateDoc, doc, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";
const firebaseConfig = { apiKey: "AIzaSyA1lt7J5NT0ln1ukX3lOT3Ny8kUKamnTNM", authDomain: "meydan-one-padel.firebaseapp.com", projectId: "meydan-one-padel", storageBucket: "meydan-one-padel.firebasestorage.app", messagingSenderId: "185588676632", appId: "1:185588676632:web:1beb62f317337278adab6d", measurementId: "G-G2Q5HM4LZH" };
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export { collection, addDoc, getDocs, query, where, updateDoc, doc, serverTimestamp };