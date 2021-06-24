import React, {useState, useEffect} from 'react'
import QrReader from 'react-qr-scanner';
import styled from 'styled-components';
import GlobalStyle from '../../theme/GlobalStyle'

const Title = styled.h1`
  color: black;
  display: inline-block;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const QrContainer = styled.div`
  width: 30rem;
  height: 30rem;
  background-color: aliceblue;
  margin-top: 2rem;
  border-radius: 3rem;
  /* overflow: hidden; */
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;


const qrCodeStyle = {
  width: '100%',
}

const Result = styled.p`
  text-align: center;
  font-size: 1.6rem;
  padding: 1rem;
  background-color: rgba(0, 0, 0, 0.3);
  width: 20em;
  height: 5em;
`;

function QrScanner() {
    const [delay, setDelay] = useState(5000);
    const [result, setResult] = useState('...');

    let userObj = {}

    const handleScan = (data) => {
        if(data){
          userObj = JSON.parse(data.text)
          setResult(`Hello ${userObj.name}! Thanks for scanning 😊`)
          
        }     
    }

    useEffect(() => {
      if(result !== '...') {
        console.log('scanned!')
        setTimeout(() => {
          setResult('...')
        }, 5000)
      }
      
    }, [userObj])
  
    const handleErr = (err) => {
      console.error(err)
    }

    return (
      <>
        <GlobalStyle/>
          <Wrapper>
            <Title dark>
                QR Scanner
            </Title>
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



