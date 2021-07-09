import React from 'react'
import { Link } from 'react-router-dom'

import { ReactComponent as Banner } from "../../assets/images/landing-banner.svg"
import { Home, Left, Subtitle, Heading, Subheading, BtnGrp } from './LandingStyles'
import {Button, RegisterBtn} from '../../components/Button'


function Landing() {
    return (
        <>
            <Home>
                <Left>
                    <Banner />
                    <Subtitle>Unified Contact Tracing App</Subtitle>

                    <Heading>Welcome! <span>✋</span></Heading>
                    <Subheading>Join the community in ending the spread of covid-19 in three simple steps:</Subheading>

                    <ul>
                        <li><span>📝</span> Create an account</li>
                        <li><span>📱</span> Generate your QR code</li>
                        <li><span>📌</span>Update your location wherever you go</li>
                    </ul>

                    <BtnGrp>
                        <Link to="/register">
                            <RegisterBtn primary style={{fontSize: "1.8rem"}}>
                                Join now  
                            </RegisterBtn>
                        </Link>
                        <Link to="/register">
                            <Button>
                              Login
                            </Button>
                        </Link>
                    </BtnGrp>
                </Left>
            </Home>

            {/* <section id="why">
                <h2>Why Tracerist?</h2>
                <p class="tag-2">For individuals and establishments</p>

                <div class="tile-container">

                    <div class="tile">
                        <image src="media/yourself.png" class="image-icon"></image>
                        <h5>Love Yourself</h5>
                        <p>Use Tracerist to track your travel history. Be notified when you have been exposed to a covid-19 case.</p>
                    </div>

                    <div class="tile">
                        <image src="media/lovedones.png" class="image-icon"></image>
                        <h5>Love Your Loved Ones</h5>
                        <p>Share Tracerist to your family, friends, and colleagues. Let us protect each other. </p>
                    </div>

                    <div class="tile">
                        <image src="media/community.png" class="image-icon"></image>
                        <h5>Love Your Community</h5>
                        <p>Use Tracerist to log who visited your establishment. This helps the authority to easily trace covid-19 cases. </p>
                    </div>

                </div>

                <p class="tag-2 margin">Help Us Fight covid-19. <a href="#" class="register-now">Register Now!</a></p>
            </section> */}

            {/* <footer>
                <p>&copy 2021 Tracerist All Rights Reserved.</p>
            </footer> */}
        </>
    )
}

export default Landing
