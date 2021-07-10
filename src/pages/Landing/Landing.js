import React from 'react'
import { Link } from 'react-router-dom'

import { ReactComponent as Banner } from "../../assets/images/landing-banner.svg"
import { Home, Section, Subtitle, Heading, Subheading, BtnGrp, About, CardWrapper, Card, Cta } from './LandingStyles'
import {Button, RegisterBtn} from '../../components/Button'
import individual from '../../assets/images/individual.png'
import lovedones from '../../assets/images/lovedones.png'
import community from '../../assets/images/community.png'


function Landing() {
    return (
        <>
            <Home>
                <Section>
                    <Banner />
                    <Subtitle>Unified Contact Tracing App</Subtitle>

                    <Heading>Welcome! <span>✋</span></Heading>
                    <Subheading>Join the community in ending the spread of covid-19 in three simple steps:</Subheading>

                    <ul>
                        <li><span>✅</span> Create an account</li>
                        <li><span>✅</span> Generate your QR code</li>
                        <li><span>✅</span>Update your location wherever you go</li>
                    </ul>

                    <BtnGrp>
                        <Link to="/register">
                            <RegisterBtn>
                                <p>Join now </p><p>&rarr;</p>
                            </RegisterBtn>
                        </Link>
                        <Link to="/login">
                            <Button>
                              Login
                            </Button>
                        </Link>
                    </BtnGrp>
                </Section>
            </Home>

            <About>
                <Heading>Why Tracerist? <span>🧏‍♂️</span></Heading>
                <p style={{fontSize:"2rem"}}>For individuals and establishments</p>

                <CardWrapper>

                    <Card>
                        <img src={individual} alt="individual"></img>
                        <h4>Love Yourself</h4>
                        <p>Use Tracerist to track your travel history. Be notified when you have been exposed to a covid-19 case.</p>
                    </Card>

                    <Card>
                        <img src={lovedones} alt="loved ones"></img>
                        <h4>Love Your Loved Ones</h4>
                        <p>Share Tracerist to your family, friends, and colleagues. Let us protect each other. </p>
                    </Card>

                    <Card>
                        <img src={community} alt="community"></img>
                        <h4>Love Your Community</h4>
                        <p>Use Tracerist to log who visited your establishment. This helps the authority to easily trace covid-19 cases. </p>
                    </Card>

                </CardWrapper>

                <Cta>
                    <h4>Help us fight covid-19.</h4> 
                    <Link to="/register">
                        <RegisterBtn>
                        <p>Register now</p><p>&rarr;</p>
                        </RegisterBtn>
                    </Link>
                </Cta>
                
            </About>
s
            {/* <footer>
                <p>&copy 2021 Tracerist All Rights Reserved.</p>
            </footer> */}
        </>
    )
}

export default Landing
