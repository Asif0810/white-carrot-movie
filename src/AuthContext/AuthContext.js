import React, { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
} from "firebase/auth";
import app from "../Firebase/Firebase";
const auth = getAuth();
export const Context = createContext(app);

const AuthContext = ({ children }) => {
  const [user, setUser] = useState(" ");
  const provider = new GoogleAuthProvider();

  const google = () => {
    return signInWithPopup(auth, provider);
  };
  const authInfo = {
    user,
    google,
  };
  // onAuthStateChanged;
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return <Context.Provider value={authInfo}>{children}</Context.Provider>;
};

export default AuthContext;
