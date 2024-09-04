import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../Config/firebase.config";

export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
    const [loading , setLoading] =useState(true);
    const [user , setUser] = useState(null);

    // sign in user
    const loginUser = (email , password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth , email , password );
    }
    // sign up user
    const createUser = (email , password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth , email , password);
    }
    // sign in with google
    const provider = new GoogleAuthProvider()
    const connectGoogle = () =>{
        return signInWithPopup(auth , provider)
    }
    // sign out user
    const logOut = () =>{
        return signOut(auth);
    }
    
    // hold user
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth , currentUser=>{
            setUser(currentUser);
            setLoading(false)
        })
        return ()=>{
            unsubscribe();
        }
    },[])


    // Pass data through 'data' object
    const data = {
        loading , user , logOut  , createUser , auth , setLoading , loginUser
    }

    // Main Code
    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
