import React, { useState, useEffect } from 'react';
import {GoogleAuthProvider, getAuth, onAuthStateChanged, signInWithPopup, signOut, }  from "firebase/auth";
import initializeFirebase from '../Firebase/firebase.init';
import axios from 'axios';
initializeFirebase();

const useFirebase = () => {
    const [user,setUser] = useState({});
    const [ error, setError] = useState('');
    const [loading, setLoading] = useState(true);

    const auth = getAuth();

    // observer if user signin or not
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
        setUser(currentUser)
        if (currentUser) {
            axios.post('http://localhost:5000/jwt', { email: currentUser.email })
            .then(data => {
                localStorage.setItem('access-token', data.data.token)
            }).catch(error => {
                console.log({error: error.message});
            })
            setLoading(false)
        }
        else {
            localStorage.removeItem('access-token')
            setLoading(false)
        }
        })
        return () => {
        return unsubscribe()
        }
    }, [])

     // logout user 
    const logoutUser = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            const errorMessage = error.message;
            setError(error.message);
        })
    }


    return (
        {
            loading,
            user,
            logoutUser,
        }
    );
};

export default useFirebase;