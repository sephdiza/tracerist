import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';

export const Navbar = styled.nav`
    height: 10vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 3rem;
    overflow-x: hidden;
`;

export const NavLogo = styled.div`

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
  }
    
`;

export const LinkWrapper = styled.ul`
    display: flex;
    justify-content: space-between;
    
    @media screen and (max-width: 760px) {
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
    height: 4px;
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

  @media screen and (max-width: 760px) {
      display: flex;
  }
`;

export const FirstLine = styled.div`
  background-color: var(--text-primary);
  width: 100%;
  height: 0.5rem;
  transition: 0.3s ease;
  /* transform: rotate(45deg) translateY(1.1rem); */
`;

export const SecondLine = styled.div`
  background-color: var(--text-primary);
  width: 100%;
  height: 0.5rem;
  transition: 0.3s ease;
  /* transform: rotate(-45deg) translateY(-1.1rem); */
`;

export const HamburgerLinks = styled.ul`
  position: fixed;
  top: 0;
  left: 0;
  /* display: ${({ show }) => (show ? 'flex' : 'none')}; */
  justify-content: center;
  align-items: center;
  gap: 12rem;
  flex-direction: column;
  z-index: 5;
  background: rgba(0,0,0, 0.95);
  display: flex;
  width: 100%;
  opacity: 1;
  height: 60%;
  padding: 2rem 0;
  transition: all .5s ease-in;
  /* transform: ${({ show }) => (show ? 'translateY(0)' : 'translateY(-100%)')}; */

  a {
    color: #fff;
  }

 
`;

export const CloseBtn = styled.span`
  top: 0;
  right: 0;
  top: 3rem;
  right: 2rem;
  width: 3.6rem;
  height: 3.6rem;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 3.2rem;
  background: black;
  padding: 3rem;
  opacity: 1;
  z-index: 999;
  border-radius: 50%;
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
  margin-right: 3rem;
  position: relative;
  border: none;
  cursor: pointer;
  background: none;
  font-weight: 600;
  color: var(--text-primary);
  
  &:hover {
    opacity: 0.7;
  }
`;