import React from 'react'
import StyledNavbar, { NavbarOption, NavbarOptions, NavbarTitle } from '../styles/StyledNavbar';
import { NavLink, useLocation } from 'react-router-dom';

const AuthOptions = () => {
    return (
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
    );
}

const DefaultOptions = () => {
    return (
        <NavbarOptions>
            <NavbarOption>
                <NavLink className={(props) => props.isActive ? 'active' : ''} to='/'>
                    Home
                </NavLink>
                <div></div>
            </NavbarOption>
            <NavbarOption>
                <NavLink className={(props) => props.isActive ? 'active' : ''} to='curriculum'>
                    Curriculum
                </NavLink>
                <div></div>
            </NavbarOption>
            <NavbarOption>
                <NavLink className={(props) => props.isActive ? 'active' : ''} to='meetings'>
                    Meetings
                </NavLink>
                <div></div>
            </NavbarOption>
            <NavbarOption>
                <NavLink className={(props) => props.isActive ? 'active' : ''} to='challenges'>
                    Challenges
                </NavLink>
                <div></div>
            </NavbarOption>
        </NavbarOptions>
    )
}

const Navbar = () => {
    const location = useLocation()
    const isAuth = location.pathname === '/login' || location.pathname === '/register'
    return (
        <>
            <StyledNavbar>
                <NavbarTitle spanColor='#121212'>
                    Intern  <span>Corp</span>
                </NavbarTitle>
                {isAuth ? <AuthOptions /> : <DefaultOptions />}
            </StyledNavbar>
        </>
    )
}

export default Navbar