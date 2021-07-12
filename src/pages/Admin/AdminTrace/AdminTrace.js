import React, { useEffect, useState, useRef } from 'react'
import { firestore } from '../../../firebase'
import { useAuth } from '../../../contexts/AuthContext'

import Nav from '../../../components/Nav'
import { VisitedTable, VisitorsTable, TraceWrapper, Search, BtnGrp, BtnLink, Searchby, Modal, ModalTable } from './AdminTraceStyles'
import { RegisterBtn } from '../../../components/Button'
import { ImOffice, ImSearch, ImUser, ImCross } from 'react-icons/im'

function AdminTrace() {
    const userDB = firestore.collection("users")
    const { traceVisited, trackVisited } = useAuth()
    const [establishment, setEstablishments] = useState([])
    const [individual, setIndividual] = useState([])
    const searchByFirstName = useRef()
    const searchByLastName = useRef()
    const [selected, setSelected] = useState()
    const modal = useRef()
    const indivLink = useRef()
    const estabLink = useRef()
    const searchValue = useRef()
    const indivValue = useRef()
    const date = useRef()
    const timeValue = useRef()
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

    const filterVisitorsByTime = (id) => {

        const timeValueVal = timeValue.current.value
        const dateValue = date.current.value
        const [year, month, day] = dateValue.split("-")
        const [hour, minutes] = timeValueVal.split(":")

        const time = new Date(Date.UTC(year,month-1, day, hour, minutes))
        const unix = time.getTime().toString()
        console.log(unix)

        firestore.collection("visitors")
        .where("estabUid", "==", id)
        .where("visitTS", ">=", "1625870880000")
        .where("visitTS", "<=", "1626130080000")
        .onSnapshot(snapshot => {
            snapshot.docs.map(doc => (
                console.log(doc.data())
            ))
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

    const handleModal = () => {
        modal.current.style.visibility = "visible";
        modal.current.style.opacity = "1";
        modal.current.style.transform = "translate(-50%, -50%)";
        
    }

    const closeModal = () => {
        modal.current.style.visibility = "hidden";
        modal.current.style.opacity = "0";
        modal.current.style.transform = "translate(-50%, 100%)";
    }

    return (
        <>
            <Nav />

            <TraceWrapper>
                <h2>Trace</h2>
                <input type="date" ref={date}/>
                <input type="time" ref={timeValue} />
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
                                    <tr key={uid}
                                        onClick={() => filterVisitorsByTime(uid)}
                                    >
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
                            <Modal ref={modal}>
                                 <span onClick={closeModal}><ImCross/></span>
                                <p style={{
                                    margin: "auto 0",
                                    fontSize: "2.4rem"
                                }}>No Travel History 🤷‍♂️</p>
                            </Modal> : 
                            <Modal ref={modal}>
                                <span onClick={closeModal}><ImCross/></span>
                                <div>
                                    <h4>Travel History of</h4>
                                    <h2>{selected}</h2>
                                </div>
                                <ModalTable>
                                    <thead>
                                        <tr>
                                            <td>Establishment</td>
                                            <td>Visit Date</td>
                                            <td>Visit Time</td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {traceVisited.map(({date, estabname, visitDate, visitTime}) => (
                                            <tr key={date}>
                                                <td>{estabname}</td>
                                                <td>{visitDate}</td>
                                                <td>{visitTime}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </ModalTable>
                                
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
                                        () => {
                                            trackVisited(email)
                                            handleModal()
                                            setSelected(`${firstName} ${lastName}`)
                                        }
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
