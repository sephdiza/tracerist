import React, { useEffect, useState } from 'react'
import { useAuth } from '../../../contexts/AuthContext'
import { firestore } from '../../../firebase';

import { Wrapper } from "../../../components/Wrapper/WrapperStyle"
import { DbWrapper, Heading, TotalContainer, TotalSection, TopVisitors, TotalDetails, ImgBorder, Title, Top5 } from './AdminDBStyles'
import Nav from '../../../components/Nav'
import individual from '../../../assets/images/individual.png'
import establishment from '../../../assets/images/establishment.png'

function AdminDB() {
    const { userData } = useAuth()
    const [userSize, setUserSize] = useState()
    const [estabSize, setEstabSize] = useState()
    
    useEffect(() => {
        firestore.collection("users").where("type", "==", "Individual").onSnapshot(snapshot => (
            setUserSize(snapshot.size)
        ))
        firestore.collection("users").where("type", "==", "Establishment").onSnapshot(snapshot => (
            setEstabSize(snapshot.size)
        ))
    }, [])

    return (
        <>
            <Nav />
            <Wrapper>
                <Heading>Hi Admin! 🤵</Heading>
                <p>Here's the number of registrant as of now.</p>
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
                            <p>
                                <span>1</span> 7 eleven  <span>40</span>
                            </p>
                            <p>
                                <span>1</span> 7 eleven  <span>40</span>
                            </p>
                            <p>
                                <span>1</span> 7 eleven  <span>40</span>
                            </p>
                            <p>
                                <span>1</span> 7 eleven  <span>40</span>
                            </p>
                            <p>
                                <span>1</span> 7 eleven  <span>40</span>
                            </p>
                        </Top5>
                    </TopVisitors>
                </DbWrapper>            
                
            </Wrapper>  
        </>
    )
}

export default AdminDB
