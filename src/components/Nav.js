import React, { useState, useRef } from 'react'

import { useAuth } from '../contexts/AuthContext';
import  { Link, useHistory } from 'react-router-dom';

import { StyledLink,
        Navbar,
        NavLogo,
        NavLink,
        LinkWrapper,
        HamburgerBtn,
        HamburgerLinks,
        FirstLine,
        SecondLine,
        LogoutBtn,
        HamLogoutBtn,
        StyledScroll,
        Border
    } from './NavStyle'
import { ReactComponent as Logo} from '../assets/images/logo.svg'

function Nav() {
    const [show, setShow] = useState({
        opacity: 0,
        transform: 'translateY(-100%)'})
    const [toggle, setToggle] = useState('false')
    const [hamBtnFirst, setHamBtnFirst] = useState('')
    const [hamBtnSecond, setHamBtnSecond] = useState('')
    const { logout, userData } = useAuth()
    const hamLink = useRef()

    const history = useHistory();
    async function handleLogout() {
        try {
            await logout()
            history.push("/login")
        } catch {
            alert("Failed to logout")
        }
    }

    const handleDisplay = () => {
        if(toggle) {
            setToggle(!toggle)
            hamLink.current.style.marginTop = "10vh"
            setHamBtnFirst('rotate(45deg) translateY(1.1rem)')   
            setHamBtnSecond('rotate(-48deg) translateY(-1.1rem)') 
            hamLink.current.style.display = "flex"
            hamLink.current.style.opacity = "1"
        } else {
            setToggle(!toggle)
            setHamBtnFirst('')   
            setHamBtnSecond('')  
            hamLink.current.style.marginTop = "-100vh"
            hamLink.current.style.visibility = "none"
            hamLink.current.style.opacity = "0"
        }
    }


    return (
        <>
        <Navbar>
            <NavLogo>
                <Link to="/profile">
                    <Logo style={{ height:'28px', width:'auto'}}/>
                    <h1>Tracerist</h1>
                </Link>  
            </NavLogo>
            <LinkWrapper>
                <NavLink>
                    {userData && <StyledLink to="/profile">Profile</StyledLink>}
                </NavLink>
                <NavLink>
                    { userData ? ( userData.type === "Establishment" ? 
                    <StyledLink to="/visitors">Visitors</StyledLink> :
                    <StyledLink to="/visited">Travel History</StyledLink>) : 
                    <StyledScroll 
                        to="home"
                        smooth={true} 
                        spy={true}
                        duration={500}
                    >
                        Home
                    </StyledScroll>
                    }  
                </NavLink>
                <NavLink>
                    {userData ? <StyledLink to="/notification">Notification</StyledLink> :
                    <StyledScroll 
                        to="about" 
                        smooth={true} 
                        spy={true}
                        duration={500}                    
                    >
                            About
                    </StyledScroll>
                    }
                </NavLink>
                { userData ? <LogoutBtn onClick={handleLogout}>Logout</LogoutBtn> :
                <LogoutBtn>
                    <Link to="/login">Login</Link>
                </LogoutBtn> 
                }
            </LinkWrapper>
            <HamburgerBtn onClick={handleDisplay}>
                <FirstLine style={{transform: hamBtnFirst}}/>
                <SecondLine style={{transform: hamBtnSecond}}/>
            </HamburgerBtn>
        </Navbar>
        
        <HamburgerLinks ref={hamLink}>
            <NavLink>
                {userData && <StyledLink to="/profile">Profile</StyledLink>}
            </NavLink>
            <NavLink>
                { userData ? ( userData.type === "Establishment" ? 
                <StyledLink to="/visitors">Visitors</StyledLink> :
                <StyledLink to="/visited">Travel History</StyledLink>) : 
                <StyledScroll 
                    to="home"
                    smooth={true} 
                    spy={true}
                    duration={500}
                    onClick={handleDisplay}
                >
                    Home
                </StyledScroll>
                }  
            </NavLink>
            <NavLink>
                {userData ? <StyledLink to="/notification">Notification</StyledLink> :
                <StyledScroll 
                    to="about" 
                    smooth={true} 
                    spy={true}
                    hashSpy={true}
                    duration={500} 
                    onClick={handleDisplay}                   
                >
                        About
                </StyledScroll>
                }
            </NavLink>
            { userData ? <HamLogoutBtn onClick={handleLogout}>Logout</HamLogoutBtn> : 
            <HamLogoutBtn>
                <Link to="/login">Login</Link>
            </HamLogoutBtn>
            
            }
        </HamburgerLinks>
        </>
    )
}

export default Nav
