import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase_init";
import { GoogleAuthProvider } from "firebase/auth";

export const AuthContext =createContext(null);
const AuthProviders = ({children}) => {

    const [user , setUser] = useState(null)
    const [loading , setLoading] = useState(true)

const googleProvider = new GoogleAuthProvider()

const createUser = (email,password) => {
    setLoading (true)
return createUserWithEmailAndPassword ( auth , email ,password)

}

 const signInWithGoogle = () => {

    return signInWithPopup(auth , googleProvider);
 }

const signInUser = (email, password) => {
    setLoading (true)
    return signInWithEmailAndPassword(auth, email, password)
}
const signOutUser = () => {
    setLoading (true)
    return signOut(auth)
    
}


useEffect(() => {
const unSubscribe = onAuthStateChanged(auth, currentUser => {
    console.log('current user',currentUser);
    setUser(currentUser)
    setLoading(false)
})
return () => {
    unSubscribe ();
}
},[])





    const authInfo = {
        loading,
        user,
        createUser,
        signInWithGoogle,
        signInUser,
        signOutUser
    }


    return (
        <AuthContext.Provider value = {authInfo} >
        {children}
        </AuthContext.Provider >
    );
};

export default AuthProviders;