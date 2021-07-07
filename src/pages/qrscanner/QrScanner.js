import React, {useState, useEffect} from 'react'
import QrReader from 'react-qr-scanner';
import {Wrapper,Title,QrContainer, qrCodeStyle, Result} from './QrScannerStyles'
import Nav from '../../components/Nav';



function QrScanner() {
    const [delay, setDelay] = useState(5000);
    const [result, setResult] = useState('Hi! Please scan here 💁🏻‍♂️');

    let userObj = {}

    const handleScan = (data) => {
        if(data){
          userObj = JSON.parse(data.text)
          setResult(`Hello ${userObj.name}! Thanks for scanning 😊`)
          
        }     
    }

    if(result !== 'Hi! Please scan here 💁🏻‍♂️') {
        console.log('scanned!')
        setTimeout(() => {
          setResult('Hi! Please scan here 💁🏻‍♂️')
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
            <Result>{result}</Result>
          </Wrapper>
      </>
    )
}

export default QrScanner;



