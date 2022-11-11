import React from 'react'
import StyledNavbar, { NavbarOption, NavbarOptions, NavbarTitle } from '../styles/StyledNavbar'

const Navbar = () => {
    return (
        <>
        <StyledNavbar>
            <NavbarTitle>
                Reusable  <span>Components</span>
            </NavbarTitle>
            <NavbarOptions>
                <NavbarOption>
                    <a href='https://www.google.com'>Home</a>
                    <div></div>
                </NavbarOption>
                <NavbarOption>
                    <a href='https://www.google.com'>Contact</a>
                    <div></div>
                </NavbarOption>
                <NavbarOption>
                    <a href='https://www.google.com'>Blog</a>
                    <div></div>
                </NavbarOption>
                <NavbarOption>
                    <a href='https://www.google.com'>About</a>
                    <div></div>
                </NavbarOption>
            </NavbarOptions>
        </StyledNavbar>
        </>
    )
}

export default Navbar