import React, {useState, useRef, useEffect} from 'react'

import { firestore } from '../../firebase';
import { useAuth } from '../../contexts/AuthContext';
import { uid } from 'uid'

import QrReader from 'react-qr-scanner';
import {Wrapper,Title,QrContainer, qrCodeStyle, ResultContainer,Result} from './QrScannerStyles'
import Nav from '../../components/Nav';


function QrScanner() {
    const [delay, setDelay] = useState(500);
    const [result, setResult] = useState('Hi! Please scan here 💁🏻‍♂️');
    const res = useRef()
    
    const scanVisitor = (user, id) => {
      firestore.collection("visitors").doc(id).set({
        name: user.name,
        email: user.email,
        healthDeclaration: user.healthDeclaration,
        visitDate: new Date().toLocaleDateString(),
        visitTime: new Date().toLocaleTimeString()
      })
    }

    const handleScan = (data) => {
        if(data){
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
          } else {
            res.current.style.backgroundColor = "green";
            res.current.children[0].style.color = "#fff"
            setResult(`Hello ${userObj.name}! Thanks for scanning 😊`)
            scanVisitor(userObj, uid())
          }
        }     
    }

    if(result !== 'Hi! Please scan here 💁🏻‍♂️') {
        console.log('scanned!')
        setTimeout(() => {
          setResult('Hi! Please scan here 💁🏻‍♂️')
          res.current.children[0].style.color = "var(--text-primary)"
          res.current.style.backgroundColor = "#ccc";
        }, 3000)
    }

    const handleErr = (err) => {
      console.error(err)
    }

    return (
      <>
        <Nav />
          <Title>Scan QR</Title>
          <Wrapper>
            <QrContainer>
                <QrReader 
                delay = {delay}
                style = {qrCodeStyle}
                onError = {handleErr}
                onScan = {handleScan}            
              />  
            </QrContainer>
            <ResultContainer ref={res}>
              <Result>{result}</Result>
            </ResultContainer>
          </Wrapper>
      </>
    )
}

export default QrScanner;



