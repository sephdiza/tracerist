import React, {useState, useRef} from 'react'

import { firestore } from '../../firebase';
import { useAuth } from '../../contexts/AuthContext';
import { uid } from 'uid'

import QrReader from 'react-qr-reader';
import {Wrapper,Title,QrContainer, ResultContainer,Result, Subtitle, Rotate} from './QrScannerStyles'
import Nav from '../../components/Nav';
import { Loading} from '../Visited/VisitedStyles'
import { ImSpinner11 } from "react-icons/im"


function QrScanner() {
    const [delay, setDelay] = useState(500);
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false)
    const res = useRef()
    const { userData } = useAuth()
    const [cam, setCam] = useState("user")
    
    const pushVisitor = (user, id) => {
      firestore.collection("visitors").doc(id).set({
        estabUid: userData.uid,
        name: user.name,
        email: user.email,
        contactno: user.contact,
        healthDeclaration: user.healthStatus,
        visitDate: new Date().toLocaleDateString(),
        visitTime: new Date().toLocaleTimeString(),
        date: Date.now(),
        visitTS: new Date()
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
        visitTime: new Date().toLocaleTimeString(),
        date: Date.now(),
        visitTS: new Date()
      })
    }

    const addVisitorSize = () => {
      firestore.collection("users").doc(userData.uid).set({
        visitors: userData.visitors + 1
      }, {merge: true})
    }

    const resetScan = () => {
      setTimeout(() => {
        setResult(null)
        res.current.style.backgroundColor = "transparent";
        setLoading(false)
      }, 2500)
    }

    // const test = JSON.parse('{"name":"Juan Cruz","uid":"PaC8UNNrFVTq2J1R3X5JS4rhy2D3","email":"jdcruz@email.com","contact":"09111112322","healthStatus":"GOOD CONDITION"}')

    // console.log(test)

    const handleScan = (data) => {
        if(data){
          const userObj = JSON.parse(data)
          
          // ----- MOVED TO PROFILE ----- //
          // const filterTruthy = Object.fromEntries(
          //   Object.entries(userObj.healthDeclaration).filter(([key, value]) => value === "true")
          // )
          // const ftLen = Object.keys(filterTruthy).length
          
          if (userObj.healthStatus === "SEVERE CONDITION") {
            setResult(`Hey! ${userObj.name} You have a severe condition😷`)
            res.current.style.backgroundColor = "red";
            res.current.children[0].style.color = "#fff"
            setLoading(true)
            resetScan()
          } else if (userObj.healthStatus === "MILD CONDITION") {
            setResult(`Hmm.. ${userObj.name} You have a mild condition 😕`)
            res.current.style.backgroundColor = "orange";
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
            addVisitorSize()
            console.log(userObj)
            resetScan()
          }
        }
      }

    const handleErr = (err) => {
      console.error(err)
    }


    const handleRotateCam = () => {
      cam === "user" ? setCam("environment") : setCam("user")
    }

    return (
      <>
        <Nav />
          <Title>Scan QR</Title>
          <Wrapper>
            <Subtitle>
              {loading ? <p>Please wait</p> : <p>Scan here <span>👇</span></p>}
            </Subtitle>
            <ResultContainer ref={res}>
              <Result>{result}</Result>
            </ResultContainer>
            <QrContainer>
              {loading ? <Loading><span>⏳</span></Loading> : (
                <QrReader 
                  delay = {delay}
                  style = {{
                    width:"100%"
                  }}
                  onError = {handleErr}
                  onScan = {handleScan}
                  facingMode = {cam}        
                />
              )}
            </QrContainer>
            <Rotate onClick={handleRotateCam}><ImSpinner11/></Rotate>
          </Wrapper>
      </>
    )
}

export default QrScanner;



