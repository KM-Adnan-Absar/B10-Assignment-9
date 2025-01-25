import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase_init";

export const AuthContext =createContext(null);
const AuthProviders = ({children}) => {

    const [user , setUser] = useState(null)
    

const createUser = (email,password) => {
return createUserWithEmailAndPassword ( auth , email ,password)

}

const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
}
const signOutUser = () => {
    return signOut(auth)
}


useEffect(() => {
const unSubscribe = onAuthStateChanged(auth, currentUser => {
    console.log('current user',currentUser);
    setUser(currentUser)
})
return () => {
    unSubscribe ();
}
},[])



// onAuthStateChanged(auth,currentUser => {

//     if(currentUser){
//         console.log('current user',currentUser);
//         setUser(currentUser)
//     }
//     else{
//         console.log('No user log in');
//         setUser(null)
//     }
// })


    const authInfo = {
        user,
        createUser,
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