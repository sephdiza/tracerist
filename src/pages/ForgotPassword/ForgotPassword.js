import React, { useState, useRef} from 'react'

import { useAuth } from '../../contexts/AuthContext'
import {Link} from 'react-router-dom'

import { LoginWrapper,
        LeftWrapper,
        BgImg,
        RightWrapper,
        RightContent,
        Banner,
        Title,
        InputGroup,
        LoginLinkText      
        } from '../Login/LoginStyles';
import { RegisterBtn } from '../../components/Button'
import titleImg from '../../assets/images/login-banner.png'

export default function ForgotPassword() {
    const emailRef = useRef()
    const [loading, setLoading] = useState(false)
    const { resetPassword } = useAuth();
 
    async function handleResetPassword(e){
        try {
            setLoading(true)
            await resetPassword(emailRef.current.value)
            alert("Check your inbox for further instructions")
        } catch {
            alert('Failed to reset password!')
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
                            <h1>Password Reset</h1>
                            <p>We will send your password reset link.</p>
                        </Title>
                        <InputGroup >
                                <input type="text" placeholder="email" ref={emailRef}/>   
                        </InputGroup>
                        <RegisterBtn style={{margin: '0 auto', marginTop: '2rem'}} onClick={handleResetPassword} disabled={loading}>Reset Password</RegisterBtn>
                        <LoginLinkText style={{margin: '0 auto', marginTop: '1rem'}}>
                            <Link to="/login">Login</Link>
                        </LoginLinkText>
                        <LoginLinkText>
                            Don't have an account? <Link to="/register">Register now.</Link>
                        </LoginLinkText>
                    </RightContent>        
                </RightWrapper>
            </LoginWrapper>
        </>
    )
}
