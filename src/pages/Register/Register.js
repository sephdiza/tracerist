import React, {useState} from 'react'

import {Link, useHistory} from 'react-router-dom'

import { RegisterBtn } from '../../components/Button'

import {RegisterWrapper, LeftWrapper, RightWrapper, RightContent, BgImg, Banner, Title, SubTitle, SelectGrp, LoginLinkText} from './RegisterStyle'
import titleImg from '../../assets/images/login-banner.png'
import { FaPen } from 'react-icons/fa'

function Register() {
    const [indivLabelBg, setIndivLabelBg] = useState('#fff');
    const [estabLabelBg, setEstabLabelBg] = useState('#fff');
    const [route, setRoute] = useState(null);

    const history = useHistory();
    const nextRoute = () => {
        let path = route;
        if(route === null) {
            alert('Please select type')
        } else {
            history.push(path);
        }    
    }

    const selectIndividual = (e) => {
        setIndivLabelBg('#02353B')
        setEstabLabelBg('#fff')
        setRoute(e.target.value)
    }
    
    const selectEstab = (e) => {
        setIndivLabelBg('#fff')
        setEstabLabelBg('#02353B')
        setRoute(e.target.value)
    }

    return (
        <>
            <RegisterWrapper>
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
                            <h1><FaPen/> Register</h1>
                            <p>Step 1 of 3 - Select type</p>
                        </Title>
                        <SubTitle>
                            <p>You can register as individual or register your establishment.</p>
                        </SubTitle>
                        <SelectGrp >
                                <label htmlFor="individual" onClick={selectIndividual} style={{backgroundColor: indivLabelBg}}>
                                    <input type="radio" name="type" id="individual" value="/register-individual" />
                                </label>
                                <label htmlFor="establishment" onClick={selectEstab} style={{backgroundColor: estabLabelBg}}>
                                    <input type="radio" name="type" id="establishment" value="/register-establishment" />   
                                </label>
                        </SelectGrp>
                        <RegisterBtn onClick={nextRoute}>Next <span>&rarr;</span></RegisterBtn>
                        <LoginLinkText>
                            Already have an account? <Link to="/login">Login now.</Link>
                        </LoginLinkText>
                    </RightContent>        
                </RightWrapper>
            </RegisterWrapper>
        </>
    )
}

export default Register
