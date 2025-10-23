import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { AuthContext } from "./AuthContext";
import { auth } from "../firebase/firebase.init";
import { useEffect, useState } from "react";

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Register
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Login
  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Password Reset
  const resetPassword = (email) => {
    setLoading(true);
    return sendPasswordResetEmail(auth, email);
  };

  // GOOGLE SignIn
  const signInGoogleUser = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // SignOut
  const signOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  // get current user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("current user", currentUser);
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    loading,
    createUser,
    signInUser,
    resetPassword,
    signInGoogleUser,
    signOutUser,
  };
  return (
    <div>
      <AuthContext value={authInfo}>{children}</AuthContext>
    </div>
  );
};

export default AuthProvider;
