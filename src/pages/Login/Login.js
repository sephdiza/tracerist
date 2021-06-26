import React, {useEffect, useState} from 'react'

import {Link, Route, useHistory} from 'react-router-dom'

import { LoginWrapper,
        LeftWrapper,
        BgImg,
        RightWrapper,
        RightContent,
        Banner,
        Title,
        CheckboxLabel,
        InputGroup,
        LoginLinkText      
        } from './LoginStyles';
import { RegisterBtn } from '../../components/Button'
import titleImg from '../../assets/images/login-banner.png'

function Login({route, setUser, url}) {
    const [signinEmail, setSigninEmail] = useState('')
    const [signinPassword, setSigninPassword] = useState('')
    const history = useHistory();
    
    // LOAD USER
    const loadUser = (userEmail, userPass) => {
        fetch(url)
        .then(res => res.json())  
        .then(data => {
            let userData = data.filter(user => (
                user.email === userEmail 
                && user.password === userPass
            ))
            if(userData && userData.length === 0) {
                alert('Incorrect email or password!')
            } else {
                setUser(userData[0])
                localStorage.setItem('user', JSON.stringify(userData[0]))
                history.push('profile')   
            }   
        }) 
    }

    const onChangeEmail = e => setSigninEmail(e.target.value)
    const onChangePass = e => setSigninPassword(e.target.value)

    
    const handleLogin = e => {
        loadUser(signinEmail, signinPassword)
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
                                <input type="text" placeholder="email" onChange={onChangeEmail}/>
                                <input type="password" placeholder="password" onChange={onChangePass}/>
                                 
                        </InputGroup>
                        <LoginLinkText>
                            <CheckboxLabel>
                                <input type="checkbox"/>
                                <p>Remember me</p>
                            </CheckboxLabel>
                            <Link to="#">Forgot Password?</Link>
                        </LoginLinkText>
                        <RegisterBtn style={{margin: '0 auto'}} onClick={handleLogin}>Sign in</RegisterBtn>
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
