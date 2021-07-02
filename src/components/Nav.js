import React, { useState } from 'react'

import { useAuth } from '../contexts/AuthContext';
import  { Link, useHistory } from 'react-router-dom';

import { StyledLink,
        Navbar,
        NavLogo,
        NavLink,
        LinkWrapper,
        HamburgerBtn,
        HamburgerLinks,
        CloseBtn,
        FirstLine,
        SecondLine,
        LogoutBtn,
        HamLogoutBtn
    } from './NavStyle'
import { ReactComponent as Logo} from '../assets/images/logo.svg'

function Nav() {
    const [show, setShow] = useState({
        opacity: 0,
        transform: 'translateY(-100%)'})
    const [hamBtnFirst, setHamBtnFirst] = useState('')
    const [hamBtnSecond, setHamBtnSecond] = useState('')
    const { logout } = useAuth()
    
    const handleDisplay = () => {
        setShow(showSideBar)
        setHamBtnFirst('rotate(45deg) translateY(1.1rem)')   
        setHamBtnSecond('rotate(-48deg) translateY(-1.1rem)')   
    }

    const history = useHistory();
    async function handleLogout() {
        try {
            await logout()
            history.push("/login")
        } catch {
            alert("Failed to logout")
        }
    }

    const handleCloseSideBar = () => {
        setShow(hideSideBar)
        setHamBtnFirst('')   
        setHamBtnSecond('')    
    }

    const showSideBar = {
        opacity: 1,
        transform: 'translateY(-1rem)'
    }

    const hideSideBar = {
        opacity: 0,
        transform: 'translateY(-100%)'
    }

    return (
        <Navbar>
            <NavLogo>
                <Link to="/profile">
                    <Logo style={{ height:'28px', width:'auto'}}/>
                    <h1>Tracerist</h1>
                </Link>  
            </NavLogo>
            <LinkWrapper>
                <NavLink>
                    <StyledLink to="/profile">Profile</StyledLink>
                </NavLink>
                <NavLink>
                    <StyledLink to="/qrscan">Travel History</StyledLink>
                </NavLink>
                <NavLink>
                    <StyledLink to="/notification">Notification</StyledLink>
                </NavLink>
                <LogoutBtn onClick={handleLogout}>Logout</LogoutBtn>
            </LinkWrapper>
            <HamburgerBtn onClick={handleDisplay}>
                <FirstLine style={{transform: hamBtnFirst}}/>
                <SecondLine style={{transform: hamBtnSecond}}/>
            </HamburgerBtn> 
            <HamburgerLinks style={show}>
                <CloseBtn onClick={handleCloseSideBar}>
                    <span>✖</span>
                </CloseBtn>
                <NavLink onClick={handleCloseSideBar}>
                    <StyledLink to="/profile">Profile</StyledLink>
                </NavLink>
                <NavLink onClick={handleCloseSideBar}>
                    <StyledLink to="/qrscan">Travel History</StyledLink>
                </NavLink>
                <NavLink onClick={handleCloseSideBar}>
                    <StyledLink to="/notification">Notification</StyledLink>
                </NavLink>
                <HamLogoutBtn onClick={handleLogout}>Logout</HamLogoutBtn>
            </HamburgerLinks>
        </Navbar>
    )
}

export default Nav
