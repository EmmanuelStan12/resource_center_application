import React from 'react'
import StyledNavbar, { NavbarOption, NavbarOptions, NavbarTitle } from '../styles/StyledNavbar';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
        <StyledNavbar>
            <NavbarTitle spanColor='#121212'>
                Intern  <span>Corp</span>
            </NavbarTitle>
            <NavbarOptions>
                <NavbarOption>
                    <NavLink className={(props) => props.isActive ? 'active' : ''} to='login'>
                        Login
                    </NavLink>
                    <div></div>
                </NavbarOption>
                <NavbarOption>
                    <NavLink className={(props) => props.isActive ? 'active' : ''} to='register'>
                        Register
                    </NavLink>
                    <div></div>
                </NavbarOption>
            </NavbarOptions>
        </StyledNavbar>
        </>
    )
}

export default Navbar