import React from 'react'
import { useAuth } from '../../contexts/AuthContext'

import Nav from '../../components/Nav'
import { Wrapper } from '../../components/Wrapper/WrapperStyle'
import { VisitedTable, Loading } from './VisitedStyles'

function Visited() {
    const { visited } = useAuth()
    
    return (
        <>
            <Nav />
            <Wrapper>
                <h2>Travel History</h2>
                {visited.length === 0 ? 
                <Loading>No Data 🤷‍♂️</Loading> : (
                <VisitedTable>
                    <thead>
                        <tr style={{
                            backgroundColor: "var(--text-primary)",
                            color: "#fff",
                            height: "3.2rem"
                        }}>
                            <th>establishment</th>
                            <th>location</th>
                            <th>date</th>
                            <th>time</th>
                            <th>contact no</th>
                        </tr>
                    </thead>
                    <tbody>
                        {visited.map(visit => (
                            <tr key={visit.visitTime}>
                                <td>{visit.estabname}</td>
                                <td style={{
                                    textAlign: "left"
                                }}>{visit.housestreet}, {visit.bgy}, {visit.city}, {visit.province}
                                </td>
                                <td>{visit.visitDate}</td>
                                <td>{visit.visitTime}</td>
                                <td>{visit.contactno}</td>
                            </tr>
                        ))
                        }
                    </tbody>
                </VisitedTable>
                )}
                
            </Wrapper>
            
            
        </>
    )
}

export default Visited
