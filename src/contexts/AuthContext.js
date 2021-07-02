import React, { useContext, useState, useEffect } from 'react'
import { auth, firestore } from "../firebase"

const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState()
    const [userData, setUserData] = useState()
    const [loading, setLoading] = useState(true)

    function signup(
        email, 
        password, 
        fname, 
        mname, 
        lname,  
        contact,
        reg,
        prov,
        ct,
        brgy,
        hstreet,
        typ) {
        auth.createUserWithEmailAndPassword(email, password)
        .then(data => {
            console.log(data.user.email, data.user.uid)
            const createUserDocument = async (user) => {
                if (!user) return
            
                const userRef = firestore.doc(`users/${data.user.uid}`)
            
                const snapshot = await userRef.get();
                if(!snapshot.exists) {
                    const {email} = data.user;
                    const firstName = fname;
                    const middleName = mname;
                    const lastName = lname;
                    const contactno = contact;
                    const region = reg;
                    const province = prov;
                    const city = ct;
                    const bgy = brgy;
                    const housestreet = hstreet;
                    const type = typ;
            
                    try {
                        userRef.set({
                            firstName,
                            email,
                            middleName, 
                            lastName,  
                            contactno,
                            region,
                            province,
                            city,
                            bgy,
                            housestreet,
                            type,
                            createdAt: new Date()
                        })
                    }catch(err){
                        console.error('Error in creating user', err)
                    }
                }
            }
            createUserDocument(data.user)
        })
        
        console.log('yes?')
    }

    function login(email, password) {
        return auth.signInWithEmailAndPassword(email, password)
    }

    function logout() {
        return auth.signOut()
    }

    function resetPassword(email) {
        return auth.sendPasswordResetEmail(email)
    }

    function updateEmail(email) {
        return currentUser.updateEmail(email)
    }

    function updatePassword(password) {
        return currentUser.updatePassword(password)
    }

    const fetchUser = async(user) => {
        const userRef = firestore.collection(`users`)
            .doc(user.uid)
        const doc = await userRef.get()
        if (!doc.exists) {
            console.log('No such document!');
          } else {
            setUserData(doc.data())
          }
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
            setLoading(false)  
        })
        return unsubscribe
    }, [])

    

    const value = {
        currentUser,
        login,
        signup,
        logout,
        resetPassword,
        updateEmail,
        updatePassword,
        fetchUser,
        userData
    }
    
    return (
        <AuthContext.Provider value={value}>
            {!loading && children }
        </AuthContext.Provider>
    )
}
