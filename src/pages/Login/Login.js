import React from 'react'

import {Link, useHistory} from 'react-router-dom'

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

function Login() {
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
                                <input type="text" placeholder="email"></input>
                                <input type="text" placeholder="password"></input>  
                        </InputGroup>
                        <LoginLinkText>
                            <CheckboxLabel>
                                <input type="checkbox"></input>
                                <p>Remember me</p>
                            </CheckboxLabel>
                            <Link to="/login">Forgot Password?</Link>
                        </LoginLinkText>
                        <RegisterBtn style={{margin: '0 auto'}}>Sign in</RegisterBtn>
                        <LoginLinkText>
                            Don't have an account yet? <Link to="/login">Register now.</Link>
                        </LoginLinkText>
                    </RightContent>        
                </RightWrapper>
            </LoginWrapper>
        </>
    )
}

export default Login
