import React, { useEffect } from 'react'
import { useAuth } from '../../contexts/AuthContext'

import Nav from '../../components/Nav'
import { Wrapper } from '../../components/Wrapper/WrapperStyle'
import { VisitorsTable, TrHead } from './VisitorsStyles'

function Visitors() {
    const { fetchVisitors, visitors, currentUser } = useAuth()
    
    useEffect(() => {
        fetchVisitors(currentUser)
      }, [])

    return (
        <>
            <Nav />
            <Wrapper>
                <h2>Visitors</h2>
                <VisitorsTable>
                    <thead>
                        <tr style={{
                            backgroundColor: "var(--text-primary)",
                            color: "#fff",
                        }}>
                            <th>name</th>
                            <th>email</th>
                            <th>date</th>
                            <th>time</th>
                            <th>contact no</th>
                        </tr>
                    </thead>
                    <tbody>
                        {!visitors ? null : (
                            visitors.map(visitor => (
                            <tr key={visitor.visitTime}>
                                <td>{visitor.name}</td>
                                <td>{visitor.email}</td>
                                <td>{visitor.visitDate}</td>
                                <td>{visitor.visitTime}</td>
                                <td>{visitor.contactno}</td>
                            </tr>
                            ))
                        )}
                    </tbody>
                </VisitorsTable>
            </Wrapper>
            
            
        </>
    )
}

export default Visitors
