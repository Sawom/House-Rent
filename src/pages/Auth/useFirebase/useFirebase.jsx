import React, { useState, useEffect } from 'react';
import {GoogleAuthProvider, getAuth, onAuthStateChanged, signInWithPopup, signOut, }  from "firebase/auth";
import initializeFirebase from '../Firebase/firebase.init';
initializeFirebase();

const useFirebase = () => {
    const [user,setUser] = useState({});
    const [ error, setError] = useState('');
    const auth = getAuth();

    // observer if user signin or not
    useEffect(()=>{
        const unsubscribed = onAuthStateChanged(auth, (user)=>{
                if(user){
                    setUser(user);
                } else{
                    setUser({})
                }
        });
        return () => unsubscribed;
    }, [auth])

     // logout user 
    const logoutUser = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        })
    }


    return (
        {
            user,
            logoutUser,
        }
    );
};

export default useFirebase;