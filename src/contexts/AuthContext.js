import React, { useContext, useState, useEffect } from 'react'
import { auth, firestore } from "../firebase"
import { uid } from 'uid'

const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState()
    const [userData, setUserData] = useState()
    const [visitors, setVisitors] = useState([])
    const [visited, setVisited] = useState([])
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
                    const {uid} = data.user;
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
                            uid,
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

    function signupEstab(
        email, 
        password, 
        estabname, 
        desc, 
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
                    const {uid} = data.user;
                    const {email} = data.user;
                    const estabName = estabname;
                    const description = desc;
                    const contactno = contact;
                    const region = reg;
                    const province = prov;
                    const city = ct;
                    const bgy = brgy;
                    const housestreet = hstreet;
                    const type = typ;
            
                    try {
                        userRef.set({
                            uid,
                            email,
                            estabName, 
                            description,  
                            contactno,
                            region,
                            province,
                            city,
                            bgy,
                            housestreet,
                            type,
                            createdAt: new Date(),
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

    const fetchVisitors = async(user) => {
        let newArr = []
        firestore
          .collection("visitors").where("estabUid", "==", user.uid)
          .get().then((querySnapshot) => {
            querySnapshot.forEach(doc => {
              newArr.push(doc.data())
            })
            setVisitors(newArr)
          })
    }

    const fetchVisited = async(user) => {
        let newArr = []
        firestore.collection("visited").where("userEmail", "==", user.email)
          .onSnapshot((querySnapshot) => {
            querySnapshot.forEach(doc => {
            newArr.push(doc.data())
            })
            setVisited(newArr)
          })
    }
 
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
                setCurrentUser(user)
                currentUser && fetchUser(currentUser)
                currentUser && fetchVisited(currentUser)
                setLoading(false)     
        })
        return () => {
            unsubscribe()
        }
    }, [currentUser])

    const value = {
        currentUser,
        login,
        signup,
        signupEstab,
        logout,
        resetPassword,
        updateEmail,
        updatePassword,
        fetchUser,
        userData,
        fetchVisitors,
        fetchVisited,
        visitors,
        visited
    }
    
    return (
        <AuthContext.Provider value={value}>
            {!loading && children }
        </AuthContext.Provider>
    )
}
