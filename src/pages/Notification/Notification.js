import React, { useEffect, useState } from 'react'

import { firestore } from '../../firebase'
import { useAuth } from '../../contexts/AuthContext'

import Nav from '../../components/Nav'
import { NotifWrapper } from './NotificationStyle'
import { matchesPattern } from '@babel/types'

function Notification() {
    const indivDB = firestore.collection("users")
    const { currentUser } = useAuth()
    const [individual, setIndividual] = useState([])
    const [message, setMessage] = useState([])
    
    useEffect(() => {
        indivDB
        .doc(currentUser.uid)
        .onSnapshot(snapshot => {
            setIndividual(arr => [...arr, snapshot.data()])
            setMessage(arr => [...arr, snapshot.data().messageArr])
        })    
    }, [])
    
    return (
        <>
        <Nav />
         <NotifWrapper>
            <h2 style={{marginBottom: '6rem'}}>Notification</h2>
            <p>Nothing's here 🤷‍♂️</p>
            
            {message && 
                message.map(({message, dateSent, timeSent, isConfirmed}) => (
                    <div key={Math.random()}>
                        <p>{message}</p>
                        <p>{timeSent}</p>
                        <p>{dateSent}</p>
                    </div>
                ))
            }           
            
         </NotifWrapper>
        </>
    )
}

export default Notification
