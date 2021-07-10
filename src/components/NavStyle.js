import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

export const Navbar = styled.nav`
    height: 10vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-right: 10vw;
    padding-left: 10vw;
    position: sticky;
    top: 0;
    margin-top: -10vh;
    background-color: #fff;
    z-index: 99;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    width: 100%;
`;

export const NavLogo = styled.div`

  a {
    display: flex;
    align-items: center;
    text-decoration: none;

    h1 {
      text-transform: uppercase;
      margin-left: 1rem;

      @media screen and (max-width: 399px) {
        font-size: 2.4rem;
      };
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

export const StyledScroll = styled(ScrollLink)`
  display: inline-block;
  text-decoration: none;
  font-size: 2rem;
  color: #02353B;
  margin-right: 3rem;
  position: relative;

  &:hover{
    cursor: pointer;
  }

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

export const Border = styled.div`
  height: 10rem;
  width: 100%;
  background-color: black;
`;

export const HamburgerLinks = styled.ul`
  position: fixed;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 9rem;
  flex-direction: column;
  background: rgba(0,0,0, 0.85);
  width: 100%;
  opacity: 1;
  height: 70%;
  padding: 2rem 0;
  transition: all .4s ease-in;
  margin-top: -100vh;

  @media screen and (max-width: 900px) {
      visibility: none;
      opacity: 0;
  }

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

  a {
    text-decoration: none;
    color: inherit;
  }

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

  a {
    text-decoration: none;
    color: inherit;
  }

  @media screen and (max-width: 935px) {
      font-size: 2rem;
    }
  
  &:hover {
    color: #02353B;
    background: #fff;
    border: 1px solid var(--text-primary);
  }
`;