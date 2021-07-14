import React, { useEffect, useState } from 'react'
import { firestore } from '../../../firebase';
import { uid } from "uid";

import { Wrapper } from "../../../components/Wrapper/WrapperStyle"
import { DbWrapper, Heading, TotalContainer, TotalSection, TopVisitors, TotalDetails, ImgBorder, Title, Top5 } from './AdminDBStyles'
import Nav from '../../../components/Nav'
import individual from '../../../assets/images/individual.png'
import establishment from '../../../assets/images/establishment.png'
import moment from "moment"

function AdminDB() {
    const [userSize, setUserSize] = useState()
    const [estabSize, setEstabSize] = useState()
    const [estabs, setEstabs] = useState([])
    const [clock, setClock] = useState()

    const runClock = () => {
        setInterval(() => {
            setClock(moment().format('MMMM Do YYYY, h:mm:ss a'))
        }, 1000)
    }
    
    
    useEffect(() => {
        try {
            firestore.collection("users").where("type", "==", "Individual").onSnapshot(snapshot => (
                setUserSize(snapshot.size)
            ))
            firestore.collection("users").where("type", "==", "Establishment").orderBy("visitors", "desc").limit(5).onSnapshot(snapshot => {
                setEstabs(snapshot.docs.map(doc => doc.data()))
            })
            firestore.collection("users").where("type", "==", "Establishment").onSnapshot(snapshot => {
                setEstabSize(snapshot.size)
            })
        } catch(err) {
            console.log(err)
        }

        runClock()

    }, [])

    return (
        <>
            <Nav />
            <Wrapper>
                <Heading>
                    <h3>Hi Admin! 🤵</h3>
                    <span>
                       {clock}
                    </span>
                </Heading>
                <p>Here's the number of registrants as of the moment.</p>

                <DbWrapper>
                    <TotalContainer>
                        <TotalSection>
                            <ImgBorder>
                            <img src={individual} alt="individual"></img>
                            </ImgBorder>
                            <TotalDetails>
                                <h3>Total Individual</h3>
                                <p>{userSize}</p>
                            </TotalDetails>
                        </TotalSection>
                        <TotalSection>
                            <ImgBorder>
                                <img src={establishment} alt="establishment"></img>
                            </ImgBorder>
                            <TotalDetails>
                                <h3>Total Establishment</h3>
                                <p>{estabSize}</p>
                            </TotalDetails>
                        </TotalSection>
                    </TotalContainer>
                    
                    <TopVisitors>
                        <Title>
                            <h3><span>📈</span> Top 5 Establishments</h3>
                            <p>with highest numbers of visitors</p>
                        </Title>
                        <Top5>
                        {estabs.map(({estabName, visitors}) => (
                            <p key={uid()}>
                                {estabName}
                                <span>{visitors}</span></p>
                        ))}
                        </Top5>
                    </TopVisitors>
                </DbWrapper>            
            </Wrapper>
        </>
    )
}

export default AdminDB
