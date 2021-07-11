import React, { useEffect, useState, useRef } from 'react'
import { firestore } from '../../../firebase'
import { useAuth } from '../../../contexts/AuthContext'

import Nav from '../../../components/Nav'
import { VisitedTable, VisitorsTable, TraceWrapper, Search, BtnGrp, BtnLink, Searchby, Modal } from './AdminTraceStyles'
import { RegisterBtn } from '../../../components/Button'
import { ImOffice, ImSearch, ImUser } from 'react-icons/im'

function AdminTrace() {
    const userDB = firestore.collection("users")
    const { traceVisited, trackVisited } = useAuth()
    const [establishment, setEstablishments] = useState([])
    const [individual, setIndividual] = useState([])
    const searchByFirstName = useRef()
    const searchByLastName = useRef()
    const indivLink = useRef()
    const estabLink = useRef()
    const searchValue = useRef()
    const indivValue = useRef()
    const [toDisplay, setToDisplay] = useState()
    const [searchBy, setSearchBy] = useState('firstName')
   

    useEffect(() => {
        userDB.where("type", "==", "Establishment").orderBy("visitors", "desc").onSnapshot(snapshot => {
            setEstablishments(snapshot.docs.map(doc => doc.data()))
        })
        userDB.where("type", "==", "Individual").orderBy("firstName").onSnapshot(snapshot => {
            setIndividual(snapshot.docs.map(doc => doc.data()))
        })
    }, [])

    const handleSearchEstab = () => {
        userDB.where("type", "==", "Establishment").where("estabName", "==", searchValue.current.value).onSnapshot(snapshot => {
            setEstablishments(snapshot.docs.map(doc => doc.data()))
        })
    }

    const handleSearchIndiv = () => {
        userDB.where("type", "==", "Individual")
            .where(searchBy, "==", indivValue.current.value)
            .onSnapshot(snapshot => {
            setIndividual(snapshot.docs.map(doc => doc.data()))
        })
    }


    const displayIndiv = (e) => {
        setToDisplay('Inidividual')
        indivLink.current.style.color = '#EC8F5B'
        estabLink.current.style.color = 'var(--text-primary)'
    }
    const displayEstab = () => {
        setToDisplay('Establishment')
        indivLink.current.style.color = 'var(--text-primary)'
        estabLink.current.style.color = '#EC8F5B'
    }

    const handleSearchFirstName = () => {
        setSearchBy('firstName')
        searchByLastName.current.style.backgroundColor = "gray"
        searchByFirstName.current.style.backgroundColor = "#EC8F5B"
    }
    const handleSearchLastName = () => {
        setSearchBy('lastName')
        searchByLastName.current.style.backgroundColor = "#EC8F5B"
        searchByFirstName.current.style.backgroundColor = "gray"
    }

    return (
        <>
            <Nav />

            <TraceWrapper>
                <h2>Trace</h2>

                <h3>What do you want to trace admin? 🕵️‍♂️</h3>
                <BtnGrp>
                    <BtnLink 
                        onClick={displayIndiv} 
                        ref={indivLink}
                    >
                        <ImUser/> Individuals</BtnLink>
                    <BtnLink 
                        onClick={displayEstab}
                        ref={estabLink}
                    >
                        <ImOffice/> 
                        Establishments
                    </BtnLink>
                </BtnGrp>
                
                { toDisplay && (
                    toDisplay === "Establishment" ?
                    <>  
                        <p style={{marginTop: "3.2rem", fontSize: "1.4rem", marginBottom: "1rem", color: "gray"}}>Note: Searching is <strong>case sensitive</strong></p>
                        <Search>
                            <input type="text" placeholder="Enter Establishment Name" ref={searchValue}/>
                            <RegisterBtn onClick={handleSearchEstab}><ImSearch />  Search</RegisterBtn>
                        </Search>
                        
                        <VisitedTable>                  
                            <thead>
                            <tr style={{
                                backgroundColor: "var(--text-primary)",
                                color: "#fff",
                                height: "3.2rem"
                            }}>
                                <th>establishment</th>
                                <th>location</th>
                                <th>email</th>
                                <th>contact no</th>
                                <th>visitors</th>
                            </tr>
                            </thead>
                            <tbody>
                                {establishment.map(({
                                    estabName,
                                    housestreet,
                                    bgy,
                                    city,
                                    province,
                                    email,
                                    contactno,
                                    visitors,
                                    uid
                                }) => (
                                    <tr key={uid}>
                                        <td style={{width: "20%"}}>{estabName}</td>
                                        <td style={{
                                            textAlign: "left",
                                            width: "35%"
                                            
                                        }}>{housestreet}, {bgy}, {city}, {province}
                                        </td>
                                        <td style={{width: "20%"}}>{email}</td>
                                        <td style={{width: "15%"}}>{contactno}</td>
                                        <td style={{width: "10%"}}>{visitors}</td>
                                    </tr>
                                ))
                                }
                            </tbody> 
                        </VisitedTable>
                    </> : 
                    <> 
                        {/* ----- DISPLAY INDIVIDUAL ----- */}
                        <Searchby>Search by: 
                            <p onClick={handleSearchFirstName}
                                ref={searchByFirstName}
                            >Firstname</p>
                            <p onClick={handleSearchLastName}
                            ref={searchByLastName}
                            >Lastname</p>
                        </Searchby>
                        <p style={{fontSize: "1.4rem", marginBottom: "1rem", color: "gray"}}>Note: Searching is <strong>case sensitive</strong></p>
                        <Search>
                            <input type="text" placeholder="Enter Individual" ref={indivValue}/>
                            <RegisterBtn onClick={handleSearchIndiv}><ImSearch />  Search</RegisterBtn>
                        </Search>

                        {traceVisited.length === 0 ?
                            <p>No Record!</p> : 
                            <Modal>
                                {traceVisited.map(({date, estabname, visitDate, visitTime}) => (
                                <div key={date}>
                                    <p>{estabname}</p>
                                    <p>{visitDate}</p>
                                    <p>{visitTime}</p>
                                </div>
                                ))}
                            </Modal>  
                        }

                        <VisitorsTable>
                            <thead>
                                <tr style={{
                                    backgroundColor: "var(--text-primary)",
                                    color: "#fff",
                                    height: "3.2rem"
                                }}>
                                    <th>name</th>
                                    <th>location</th>
                                    <th>email</th>
                                    <th>contact no</th>
                                </tr>
                            </thead>
                            <tbody>
                                {individual.map(({
                                    firstName,
                                    middleName,
                                    lastName,
                                    housestreet,
                                    bgy,
                                    city,
                                    province,
                                    email,
                                    contactno
                                }) => (
                                <tr key={email}
                                    onClick={
                                        () => trackVisited(email)
                                    }
                                >
                                    <td>{firstName} {middleName} {lastName}</td>
                                    <td>{housestreet}, {bgy}, {city}, {province}</td>
                                    <td>{email}</td>
                                    <td>{contactno}</td>
                                </tr>
                                ))}
                            </tbody>
                        </VisitorsTable>
                    </>
                )}


            </TraceWrapper>
        </>
    )
}

export default AdminTrace
