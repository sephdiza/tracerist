import React from 'react'

import Nav from '../../components/Nav'

import { NotifWrapper } from './NotificationStyle'

function Notification() {
    
    return (
        <>
        <Nav />
         <NotifWrapper>
            <h2 style={{marginBottom: '6rem'}}>Notification</h2>
            <p>Nothing's here 🤷‍♂️</p>
         </NotifWrapper>
        </>
    )
}

export default Notification
