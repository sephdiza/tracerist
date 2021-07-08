import React, {useState, useRef} from 'react'

import { firestore } from '../../firebase';
import { useAuth } from '../../contexts/AuthContext';

import QrReader from 'react-qr-scanner';
import {Wrapper,Title,QrContainer, qrCodeStyle, ResultContainer,Result} from './QrScannerStyles'
import Nav from '../../components/Nav';


function QrScanner() {
    const [delay, setDelay] = useState(5000);
    const [result, setResult] = useState('Hi! Please scan here 💁🏻‍♂️');
    const { userData } = useAuth()
    const res = useRef()

    let userObj = {}

    // const scannedUser = async(user) => {
    //   const userRef = firestore
    //       .collection(`users`)
    //       .doc(user.uid)
    //   const doc = await userRef.get()
    //   if (!doc.exists) {
    //       console.log('No such document!');
    //   } else {
    //     console.log(user)
    //   }
    // }

    // if(!userData){

    // } else {
    //   scannedUser(userData)
    // }

    
    

    const handleScan = (data) => {
      
        if(data){
          let date = new Date()
          const [month, day, year]       = [date.getMonth(), date.getDate(), date.getFullYear()];
          const [hour, minutes,] = [date.getHours(), date.getMinutes()];
          let dateNow = `${month+1}-${day}-${year}, ${hour}:${minutes}`

          userObj = JSON.parse(data.text)
          
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
          }
          
          
          // console.log(userObj)
        }     
    }

    if(result !== 'Hi! Please scan here 💁🏻‍♂️') {
        console.log('scanned!')
        setTimeout(() => {
          setResult('Hi! Please scan here 💁🏻‍♂️')
          res.current.children[0].style.color = "var(--text-primary)"
          res.current.style.backgroundColor = "#ccc";
        }, 5000)
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



