import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';

export const Navbar = styled.nav`

    height: 10vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 3rem;
    margin-right: 20vw;
    margin-left: 20vw;

    @media only screen and (max-width: 1240px) {
        margin-left: 10vw;
        margin-right: 10vw;
    }
`;

export const NavLogo = styled.div`

  a {
    display: flex;
    align-items: center;
    text-decoration: none;

    h1 {
      text-transform: uppercase;
      margin-left: 1rem;
    }
  }
    
`;

export const LinkWrapper = styled.ul`
    display: flex;
    justify-content: space-between;
    
    @media screen and (max-width: 900px) {
      display: none;
    }
`;

export const NavLink = styled.li`
    list-style: none;
`;

export const StyledLink = styled(Link)`
  display: inline-block;
  text-decoration: none;
  font-size: 2rem;
  color: #02353B;
  margin-right: 3rem;
  position: relative;

  @media screen and (max-width: 935px) {
      font-size: 1.6rem;
    }


  &.active::after {
    content: '';
    display: block;
    position: absolute;
    margin-top: 3px;
    height: 4px;
    background: linear-gradient(to right, #EC8F5B, #EDF063);
    opacity: 0.6;
    width: 80%;
  }

  &::after {
    content: '';
    display: block;
    position: absolute;
    margin-top: 3px;
    height: 5px;
    border-radius: .5rem;
    background: linear-gradient(to right, #EC8F5B, #EDF063);
    opacity: 0.6;
    width: 0;
    transition: width 0.3s
  }

  &:hover::after {
    width: 80%;
  }
`;

export const HamburgerBtn = styled.div`
  width: 3rem;
  height: 3rem;
  display: none;
  gap: 1rem;
  flex-direction: column;
  position: fixed;
  top: 0;
  right: 0;
  top: 4rem;
  right: 4rem;
  z-index: 5;

  &:hover {
    cursor: pointer;
  }

  @media screen and (max-width: 900px) {
      display: flex;
  }
`;

export const FirstLine = styled.div`
  background-color: var(--text-primary);
  width: 100%;
  height: 0.4rem;
  transition: 0.3s ease;
  border-radius: .5rem;
  /* transform: rotate(45deg) translateY(1.1rem); */
`;

export const SecondLine = styled.div`
  background-color: var(--text-primary);
  width: 100%;
  height: 0.4rem;
  transition: 0.3s ease;
  border-radius: .5rem;
  /* transform: rotate(-45deg) translateY(-1.1rem); */
`;

export const HamburgerLinks = styled.ul`
  position: fixed;
  top: 0;
  left: 0;
  /* display: ${({ show }) => (show ? 'flex' : 'none')}; */
  justify-content: center;
  align-items: center;
  gap: 9rem;
  flex-direction: column;
  z-index: 5;
  background: rgba(0,0,0, 0.85);
  display: flex;
  width: 100%;
  opacity: 1;
  height: 70%;
  padding: 2rem 0;
  transition: all .4s ease-in;
  /* transform: ${({ show }) => (show ? 'translateY(0)' : 'translateY(-100%)')}; */

  a {
    color: #fff;
    font-size: 2.4rem;
  }

 
`;

export const CloseBtn = styled.span`
  top: 3rem;
  right: 4rem;
  width: 5rem;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 2rem;
  background: black;
  border-radius: .5rem;
  padding: 1rem;
  z-index: 999;
  transition: .2s ease;

  &:hover {
    color: #ccc;
    cursor: pointer;
  }
`;

export const LogoutBtn = styled.button`
 display: inline-block;
  text-decoration: none;
  font-size: 2rem;
  color: #02353B;
  background: none;
  margin-right: 3rem;
  position: relative;
  border: none;
  cursor: pointer;
  color: var(--text-primary);
  border: 1px solid var(--text-primary);
  border-radius: .5rem;
  padding: .5rem 1rem;
  transition: .3s ease;
  transform: translateY(-4px);

  @media screen and (max-width: 935px) {
      font-size: 1.6rem;
    }
  
  &:hover {
    opacity: 0.9;
    color: #fff;
    background: var(--text-primary);
  }
`;

export const HamLogoutBtn = styled.button`
  display: inline-block;
  text-decoration: none;
  margin-right: 3rem;
  position: relative;
  border: none;
  cursor: pointer;
  color: var(--text-primary);
  border: 1px solid #fff;
  border-radius: .5rem;
  padding: 1.5rem 3rem;
  transition: .3s ease;
  transform: translateY(-4px);
  color: #fff;
  background: transparent;

  @media screen and (max-width: 935px) {
      font-size: 2rem;
    }
  
  &:hover {
    color: #02353B;
    background: #fff;
    border: 1px solid var(--text-primary);
  }
`;