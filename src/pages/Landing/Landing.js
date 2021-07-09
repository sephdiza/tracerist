import React from 'react'

function Landing() {
    return (
        <>
            <section id="home">
                <div class="left">
            
                    <image src="media/home-banner.png" class="logo-img"></image>
                    <p class="tagline">Unified Contact Tracing App</p>

                    <h2>Welcome.</h2>
                    <p class="after-welcome">Join the community in ending the spread of covid-19 in three simple steps:</p>
                    <ul>
                        <li>Create an account</li>
                        <li>Generate your QR code</li>
                        <li>Update your location wherever you go</li>
                    </ul>

                    <div class="button-frame">
                        <div class="buttons margin-right-space">
                            <label>Request to join</label>
                            <a href="#" target="_blank">
                                <button class="register">Register</button>
                            </a>
                        </div>


                        <div class="buttons vertical-line ">
                        </div>

                        <div class="buttons margin-left-space">
                            <label>Already have an account?</label>
                            <a href="#" target="_blank">
                                <button class="login">Login</button>
                            </a>
                        </div>
                    </div>
                </div>

                <div class="right">
                    <image src="media/hand-img.png" class="hand-img" ></image>
                </div>

            </section>

            <section id="why">
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
            </section>

            <footer>
                <p>&copy 2021 Tracerist All Rights Reserved.</p>
            </footer>
        </>
    )
}

export default Landing
