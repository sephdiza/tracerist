import React, { useState, useRef} from 'react'

import { useAuth } from '../../contexts/AuthContext'
import {Link, useHistory} from 'react-router-dom'

import { LoginWrapper,
        LeftWrapper,
        BgImg,
        RightWrapper,
        RightContent,
        Banner,
        Title,
        InputGroup,
        LoginLinkText      
        } from './LoginStyles';
import { RegisterBtn } from '../../components/Button'
import titleImg from '../../assets/images/login-banner.png'

function Login() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const [loading, setLoading] = useState(false)
    const history = useHistory();
    const { login } = useAuth();
 
    async function handleLogin(e){
        try {
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            history.push("/profile")
        } catch {
            alert('Incorrect email or password!')
        }
       setLoading(false)
    }
 
    return (
        <>
            <LoginWrapper>
                <LeftWrapper>
                    <BgImg>
                    </BgImg>
                </LeftWrapper>
                <RightWrapper>
                    <RightContent>
                        <Banner>
                            <img src={titleImg} alt="title"/>
                            <p>Unified Contact Tracing App</p>
                        </Banner>
                        <Title>
                            <h1>Login</h1>
                            <p>Help us fight covid-19.</p>
                        </Title>
                        <InputGroup >
                                <input type="text" placeholder="email" ref={emailRef}/>
                                <input type="password" placeholder="password" ref={passwordRef}/>     
                        </InputGroup>
                        <LoginLinkText>
                            <Link to="/forgot-password">Forgot Password?</Link>
                        </LoginLinkText>
                        <RegisterBtn style={{margin: '0 auto'}} onClick={handleLogin} disabled={loading}>Sign in</RegisterBtn>
                        <LoginLinkText>
                            Don't have an account yet? <Link to="/register">Register now.</Link>
                        </LoginLinkText>
                    </RightContent>        
                </RightWrapper>
            </LoginWrapper>
        </>
    )
}

export default Login
