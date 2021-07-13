import React, { useEffect, useState } from 'react'

import { firestore } from '../../firebase'
import { useAuth } from '../../contexts/AuthContext'

import Nav from '../../components/Nav'
import { NotifWrapper, MessageContainer } from './NotificationStyle'
import { RegisterBtn } from '../../components/Button'

function Notification() {
    const indivDB = firestore.collection("users")
    const messageDB = firestore.collection("messages")
    const { currentUser, userData } = useAuth()
    const [individual, setIndividual] = useState([])
    const [messages, setMessages] = useState([])
    const [allMessages, setAllMessages] = useState([])
    
    useEffect(() => {
        indivDB.doc(currentUser.uid).onSnapshot(snapshot => {
            setIndividual(snapshot.data())
        })
        
        messageDB.where("uid", "==", currentUser.uid)
        .onSnapshot(snapshot => 
            setMessages(snapshot.docs.map(doc => (doc.data())))
        )

        messageDB.onSnapshot(snap => setAllMessages(snap.docs.map(doc =>
           (doc.data()))))
    }, [])

    const handleConfirm = () => {
        messageDB.where("uid", "==", currentUser.uid)
        .onSnapshot(snapshot => 
            snapshot.docs.map(doc => (
                messageDB.doc(doc.data().messageID)
                .set({
                    isConfirmed: true
                }, {merge: true})
            ))
        )
    }
    
    return (
        <>
        <Nav /> {
            (individual.type === "Individual" |
            individual.type === "Establishment") ?
            (<NotifWrapper>
            <h2>Notification</h2>
            {messages.length === 0 ? 
            <p>Nothing's here 🤷‍♂️</p> : 
                messages.map(({message, dateSent, timeSent, isConfirmed, fromEstab}) => (
                    <MessageContainer key={Math.random()}
                    >
                        <p>{message}</p>
                        <p style={{
                            color: "var(--accent)",
                            fontSize: "1.4rem",
                            fontWeight: "500"
                        }}>Sent: {timeSent} {dateSent}</p>
                        <p style={{
                            color: "var(--accent)",
                            fontSize: "1.4rem",
                            fontWeight: "500"
                        }}>Establishment: {fromEstab}</p>
                        <RegisterBtn onClick={handleConfirm}>
                            {!isConfirmed ? "Confirm" : "Confirmed 👍"}
                        </RegisterBtn>
                    </MessageContainer>
                ))
            }           
            
         </NotifWrapper>) :
         <NotifWrapper>
             <h1>Hello Admin!!</h1>
              { allMessages.length === 0 ? null :
                allMessages.map(({uid, dateSent, timeSent, isConfirmed}) => (
                    <div key={Math.random()}>
                        <p>{uid}</p>
                        <p>{dateSent}</p>
                        <p>{timeSent}</p>
                    </div>
                ))
              }
         </NotifWrapper>
         
        }
        
        </>
    )
}

export default Notification
