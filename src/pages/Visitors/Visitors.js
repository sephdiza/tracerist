import React, { useEffect } from 'react'
import { useAuth } from '../../contexts/AuthContext'

function Visitors() {
    const { fetchVisitors, visitors } = useAuth()
    
    useEffect(() => {
        fetchVisitors()
      }, [])

    return (
        <>
            <table>
                <thead>
                    <th>name</th>
                    <th>email</th>
                    <th>date</th>
                    <th>time</th>
                </thead>
                <tbody>
                    {!visitors ? <p>No visitors</p> : (
                        visitors.map(visitor => (
                        <tr key={visitor.visitTime}
                        style={{marginBottom: "3rem"}}>
                            <td>{visitor.name}</td>
                            <td>{visitor.email}</td>
                            <td>{visitor.visitDate}</td>
                            <td>{visitor.visitTime}</td>
                        </tr>
                        ))
                    )}
                </tbody>
            </table>
            
        </>
    )
}

export default Visitors
