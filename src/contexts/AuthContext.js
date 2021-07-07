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
                            createdAt: new Date(),
                            // healthDeclaration: {
                            //     question1a: "",
                            //     question1b: "",
                            //     question1c: "",
                            //     question1d: "",
                            //     question1e: "",
                            //     question1f: "",
                            //     question1g: "",
                            //     question2: "",
                            //     question3: "",
                            //     question4: "",
                            //     question5: "",
                            //     question6: "",
                            //     question7: "",
                            // },
                            bdate: "",
                            pobirth: "",
                            nationality: "",
                            civilstatus: "",
                            mothermaiden: "",
                            empstatus: "",
                            employer: ""
                        })
                    }catch(err){
                        console.error('Error in creating user', err)
                    }
                }
            }
            createUserDocument(data.user)
        })
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
        firestore
            .collection("users")
            .doc(user.uid)
            .onSnapshot((doc) => {
                setUserData(doc.data())
            })
            setLoading(false)
    }



    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
                setCurrentUser(user)
                setLoading(false)
                user && fetchUser(user)
        })
        
        return () => {
            unsubscribe()
        }
    }, [currentUser])

    

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
