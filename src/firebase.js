// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD0xmnMYNXTZl-9NXjTKESO7G3Wc0nGRIo",
    authDomain: "projetoa3-cd505.firebaseapp.com",
    projectId: "projetoa3-cd505",
    storageBucket: "projetoa3-cd505.firebasestorage.app",
    messagingSenderId: "186530412472",
    appId: "1:186530412472:web:be234e92b585940e3e414d"
};

// Inicializar o Firebase
const app = initializeApp(firebaseConfig);

// Exportar o Firestore
const db = getFirestore(app);

export { db };
