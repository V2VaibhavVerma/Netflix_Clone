
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { createUserWithEmailAndPassword, 
        getAuth, 
        signInWithEmailAndPassword } from "firebase/auth";
import { addDoc, 
        getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCvISa9b3ns_Y6XwAMJH-MAnCX-EFaYszA",
  authDomain: "netflix-clone-90a5f.firebaseapp.com",
  projectId: "netflix-clone-90a5f",
  storageBucket: "netflix-clone-90a5f.appspot.com",
  messagingSenderId: "994574312627",
  appId: "1:994574312627:web:93fe9eb68a527ece1e7cc6",
  measurementId: "G-XP8H03D0G8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth =  getAuth(app);   //Initialised the authenticiation
const db = getFirestore(app); //Initialised the application

const signup = async(name, email, password)=>{
    try{
        const res = await createUserWithEmailAndPassword(auth,email,password);
        const user =  res.user;
        await addDoc(collection(db, "user"),{
            uid: user.uid,
            name,
            authProvider: "local",
            email,

        })
    } catch(error){
        console.log(Error);
        alert(Error);

    }
}

const login = async (email, password)=>{
    try {
        await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
        console.log(error);
        alert(error);
    }
}

const logout= ()=>{
    signOut(auth);
}

export {auth, db, login, signup, logout};