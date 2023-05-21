import React from 'react';
import  { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../Firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const AuthProviders = ({ children }) => {
    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true)

    const signUp=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password);
    } 
    const update=(user,name,photourl)=>{
        return updateProfile(user,{
            displayName: name,
            photoURL:photourl
        })
    }
    const signIn=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const googleSignIn=()=>{
        setLoading(true)
        return signInWithPopup(auth,provider)
    }
    const logOut=()=>{
        setLoading(true)
        return signOut(auth);
    }
   
    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,currentUser=>{
            setLoading(false)
            setUser(currentUser);
        });
        return ()=>{
            return unsubscribe()
        }
    },[])

   

    const authInfo = {
        user,signUp,signIn,logOut,update,googleSignIn,loading
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {
                children
            }
        </AuthContext.Provider>
    );
};

export default AuthProviders;