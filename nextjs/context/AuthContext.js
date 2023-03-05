import { useContext, useEffect, useState, createContext } from "react";
import { auth, db } from "../firebase/firebase-config";
import { signInWithEmailAndPassword, onAuthStateChanged, signOut, createUserWithEmailAndPassword, sendPasswordResetEmail, updateEmail, updatePassword, deleteUser, updateProfile } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";


const AuthContext = createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider( { children }) {
    const [currentUser, setCurrentUser] = useState({})
    const [loading, setLoading] = useState(true)

    // login
    function login(email, password) {
        return signInWithEmailAndPassword(auth, email, password);
    }

    // Sign Up (neues Konto erstellen)
    function signupFunc(signupemail, signuppassword, name, tel) {
        return createUserWithEmailAndPassword(auth, signupemail, signuppassword)
        //     .then((userCred) => {
        //     const UserData = {
        //         email: userCred.user.email,
        //         name: name,
        //         PhoneNumber: tel
        //     }
            
        //     return setDoc(doc(db, "users", userCred.user.uid), UserData)
        // })
    }

    // Auth Status
    useEffect(() => {
        const unsubsribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user)
            setLoading(false)
        })
        return unsubsribe
    }, [])

    // Logout
    function logout() {
        return signOut(auth)
    }
    
    function resetPassword(email) {
        return sendPasswordResetEmail(auth, email)
    }
    function updateEmailfunc(email) {
        return updateEmail(auth.currentUser, email)
    }
    function updatePasswordfunc(password) {
        return updatePassword(auth.currentUser, password)
    }
    function deleteAccount() {
        return deleteUser(auth.currentUser)
    }
    function updateUserInfo(name, photo) {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        })
    }

    const value = { resetPassword, logout ,login, signupFunc, updateEmailfunc, updatePasswordfunc, updateUserInfo, deleteAccount, currentUser }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children }
        </AuthContext.Provider>
    )
}