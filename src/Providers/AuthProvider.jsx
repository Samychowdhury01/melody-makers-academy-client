import React, { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import axios from "axios";

export const AuthContext = createContext(null);

const auth = getAuth(app);

// google auth provider
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // sign in with google
  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // create user with email and password
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // login user with email and password
  const loginWithEmail = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Update photo and name
  const updateUserProfile = (name, photoUrl) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoUrl,
    });
  };

  // sign-out user
  const logOut = () => {
    return signOut(auth);
  };

  // observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
        setUser(currentUser);
        // get and set token
        if(currentUser){
            axios.post('https://melody-makers-server.vercel.app/jwt', {email: currentUser.email})
            .then(data =>{
                // console.log(data.data.token)
                localStorage.setItem('access-token', data.data.token)
                setLoading(false);
            })
        }
        else{
            localStorage.removeItem('access-token')
        }

        
    });
    return () => {
        return unsubscribe();
    }
}, [])


  const authInfo = {
    user,
    loading,
    googleSignIn,
    createUser,
    loginWithEmail,
    updateUserProfile,
    logOut,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
