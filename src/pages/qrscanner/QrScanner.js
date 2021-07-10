import React, {useState, useRef, useEffect} from 'react'

import { firestore } from '../../firebase';
import { useAuth } from '../../contexts/AuthContext';
import { uid } from 'uid'

import QrReader from 'react-qr-scanner';
import {Wrapper,Title,QrContainer, qrCodeStyle, ResultContainer,Result, Subtitle} from './QrScannerStyles'
import Nav from '../../components/Nav';
import { Loading} from '../Visited/VisitedStyles'


function QrScanner() {
    const [delay, setDelay] = useState(500);
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false)
    const res = useRef()
    const { userData } = useAuth()
    
    const pushVisitor = (user, id) => {
      firestore.collection("visitors").doc(id).set({
        estabUid: userData.uid,
        name: user.name,
        email: user.email,
        contactno: user.contact,
        healthDeclaration: user.healthDeclaration,
        visitDate: new Date().toLocaleDateString(),
        visitTime: new Date().toLocaleTimeString()
      })
    }

    const pushVisited = (user, estab) => {
      firestore.collection("visited").doc(uid()).set({
        userEmail: user.email,
        estabname: estab.estabName,
        province: estab.province,
        city: estab.city,
        bgy: estab.bgy,
        housestreet: estab.housestreet,
        contactno: estab.contactno,
        visitDate: new Date().toLocaleDateString(),
        visitTime: new Date().toLocaleTimeString()
      })
    }

    const resetScan = () => {
      setTimeout(() => {
        setResult(null)
        res.current.style.backgroundColor = "transparent";
        setLoading(false)
      }, 2500)
    }

    const handleScan = (data) => {
        if(!loading && data){
          const userObj = JSON.parse(data.text)
          
          // filter health declaration with values === true
          const filterTruthy = Object.fromEntries(
            Object.entries(userObj.healthDeclaration).filter(([key, value]) => value === "true")
          )
          const ftLen = Object.keys(filterTruthy).length
          
          if (ftLen > 0) {
            setResult("Oops looks like you have a symptom base on your health declaration 😷")
            res.current.style.backgroundColor = "red";
            res.current.children[0].style.color = "#fff"
            setLoading(true)
            resetScan()
          } else {
            res.current.style.backgroundColor = "green";
            res.current.children[0].style.color = "#fff"
            setResult(`Hello ${userObj.name}! Thanks for scanning 😊`)
            setLoading(true)
            pushVisited(userObj, userData)
            pushVisitor(userObj, uid())
            resetScan()
          }
        }
      }

    const handleErr = (err) => {
      console.error(err)
    }

    return (
      <>
        <Nav />
          <Title>Scan QR</Title>
          <Wrapper>
            <Subtitle>
              {loading ? <p>Please wait</p> : <p>Scan here <span>👇</span></p>}
            </Subtitle>
            <QrContainer>
              {loading ? <Loading><span>⏳</span></Loading> : (
                <QrReader 
                delay = {delay}
                style = {qrCodeStyle}
                onError = {handleErr}
                onScan = {handleScan}           
                /> 
              )}  
            </QrContainer>
            <ResultContainer ref={res}>
              <Result>{result}</Result>
            </ResultContainer>
          </Wrapper>
      </>
    )
}

export default QrScanner;



