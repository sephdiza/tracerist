import React, { useEffect, useState, useRef } from 'react'
import { firestore } from '../../../firebase'
import { useAuth } from '../../../contexts/AuthContext'

import Nav from '../../../components/Nav'
import { VisitedTable, VisitorsTable, TraceWrapper, Search, BtnGrp, BtnLink, Searchby, Modal, ModalTable, FilterInputGrp } from './AdminTraceStyles'
import { Button, RegisterBtn } from '../../../components/Button'
import { ImOffice, ImSearch, ImUser, ImCross } from 'react-icons/im'
import { uid } from "uid"

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
    const [filteredVisitors, setFilteredVisitors] = useState([])
    const [estabUID, setEstabUID] = useState('')
   

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

    const filterVisitorsByTime = (id, e) => {
        e.preventDefault()
        // set input date and time to unix format
        const timeValueVal = timeValue.current.value
        const dateValue = date.current.value
        const [year=0, month=0, day=0] = dateValue.split("-")
        const [hour=0, minutes=0] = timeValueVal.split(":")
        const time = new Date(year,month-1, day, hour, minutes)
        const unix = time.getTime()

        setEstabUID(id)

        firestore.collection("visitors")
        .where("estabUid", "==", id)
        .where("date", ">=", unix)
        .onSnapshot(snapshot => {
            setFilteredVisitors(snapshot.docs.map(doc => (
                doc.data()
            )))
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

    const handleNotify = () => {
        //ESTABLISHMENT//
        const messID = uid()
        firestore.collection("messages")
                        .doc(messID)
                        .set({
                                message: `
                                Notice of Establishment Exposure to Covid-19 case.
                                \n
                                Hello! This is Tracerist.
                                \n
                                We would like to inform you that one of the people who visited your establishment has been tested positive for Covid-19. 
                                \n
                                As such, employees working at your establishment may have been exposed to this virus.
                                We have already reached out to those people believed who have been in close or direct contact with the subject person
                                so that they may take appropriate measures for themselves.
                                \n
                                We recommend to temporarily close your establishment and sanitize the whole vicinity as early as you received this message. 
                                The employees and staff should also stay at home for a 14-day monitoring period.
                                If anyone experience symptoms, please inform the local officials to provide them health care.
                                We are hoping for your cooperation in ending the spread of Covid-19.
                                \n
                                Please confirm if you have received this message.
                                Thank you!
                                `,
                                isConfirmed: false,
                                dateSent: new Date().toLocaleDateString(),
                                timeSent: new Date().toLocaleTimeString(),
                                messageID: messID,
                                uid: estabUID,
                                to: selected
                        }, {merge: true})
        

        //VISITORS//
        filteredVisitors.map(visitor => (
            userDB.where("type", "==", "Individual").where("email", "==", visitor.email).onSnapshot(snapshot => {
                snapshot.docs.map(doc => {
                    const messID = uid()
                    return firestore.collection("messages")
                        .doc(messID)
                        .set({
                                message: `
                                    Hello ${doc.data().firstName} ${doc.data().lastName}! This is Tracerist.
                                    \n
                                    We messaged you for an important health matter. You have been exposed to someone who had no idea he/she is positive for Covid-19. We ask you to take appropriate measures for yourself as early as you received this message.
                                    \n
                                    It is strictly recommended for you to stay at home for a 14-day monitoring period.
                                    If you experience symptoms, please inform the local officials to provide you immediate health care.
                                    \n
                                    We are hoping for your cooperation in ending the spread of Covid-19.
                                    \n
                                    Please confirm if you have received this message.
                                    Thank you!
                                `,
                                isConfirmed: false,
                                dateSent: new Date().toLocaleDateString(),
                                timeSent: new Date().toLocaleTimeString(),
                                fromEstab: selected,
                                messageID: messID,
                                uid: doc.data().uid,
                                to: `${doc.data().firstName} ${doc.data().lastName}`
                        }, {merge: true})
                    }   
                )
            })
        ))
        alert("Notication message sent! ✔")
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

                        {/* ESTAB MODAL */}
                        <Modal 
                            ref={modal}
                        >
                            <span onClick={closeModal}>
                                <ImCross/>
                            </span>
                            <div>
                                <h4>Visitors Summary of</h4>
                                <h2>{selected}</h2>
                            </div>
                            <form>
                                <FilterInputGrp>
                                    <input
                                    type="date" 
                                    ref={date}/>
                                    <input type="time" ref={timeValue} />
                                    <input 
                                        type="submit"    
                                        value="Filter by Date & Time"
                                        onClick={(e) => filterVisitorsByTime(estabUID, e)}
                                    />
                                    <section style={{width:"5rem"}}>
                                    <input type="reset"
                                    />
                                    </section>
                                    
                                </FilterInputGrp>
                            </form>
                            {
                                filteredVisitors.length === 0 ? <p>No Data</p> : (
                            <>
                                <ModalTable
                                    style={{
                                        marginTop:"3rem",
                                        marginBottom:"3rem"
                                    }}
                                >
                                    <thead>
                                        <tr>
                                            <td>Name</td>
                                            <td>Visit Date</td>
                                            <td>Visit Time</td>
                                            <td>Contact no</td>
                                            <td>Email</td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {filteredVisitors.map(({name, visitDate, visitTime, contactno, email, date}) => (
                                            <tr key={date}>
                                                <td>{name}</td>
                                                <td>{visitDate}</td>
                                                <td>{visitTime}</td>
                                                <td>{contactno}</td>
                                                <td>{email}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </ModalTable>
                                <Button 
                                    primary
                                    style={{
                                        padding: "1rem",
                                    }}
                                    onClick={handleNotify}
                                >
                                   <p>Send Notice</p>
                                </Button>
                            </>)
                            }  
                        </Modal>
                        
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
                                        onClick={(e) => {
                                                handleModal()
                                                setSelected(`${estabName}`)
                                                filterVisitorsByTime(uid, e)
                                            }
                                        }
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
                            
                        {/* --- INDIVIDUAL MODAL --- */}
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
