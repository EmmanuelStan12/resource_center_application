import React from 'react';
import Box from '../styles/StyledBox'
import StyledNavbar, { NavbarOption, NavbarOptions, NavbarTitle, StyledHomeNavbar } from '../styles/StyledNavbar';
import { NavLink, useLocation } from 'react-router-dom';
import { FloatingActionButton } from '../styles/StyledButton'
import { GiHamburgerMenu } from 'react-icons/gi'
import FlexContainer from '../styles/StyledFlexContainer';
import { Avatar } from '../styles/StyledImage';
import { IoMdNotificationsOutline } from 'react-icons/io' 
import { AiOutlineLogout } from 'react-icons/ai';
import useLocalStorage from '../hooks/useLocalStorage';
import { useNavigate } from 'react-router-dom';

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

export const HomeNavbar = ({ open }) => {
    const { clear } = useLocalStorage()
    const navigate = useNavigate()
    return (
        <StyledHomeNavbar>
            <FlexContainer height='fit-content' width='fit-content' gap='7px'>
                <FloatingActionButton onClick={() => open(prev => !prev)} size={40}>
                    <GiHamburgerMenu />
                </FloatingActionButton>
                <NavbarTitle spanColor='#121212'>
                    Intern  <span>Corp</span>
                </NavbarTitle>
            </FlexContainer>
            <FlexContainer height='fit-content' width='fit-content' gap='7px'>
                <FloatingActionButton size={40}>
                    <IoMdNotificationsOutline />
                </FloatingActionButton>
                <Avatar size={42} src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png' />
                <FloatingActionButton onClick={() => {
                    clear()
                    navigate('/login')
                }} size={40} variant='red'>
                    <AiOutlineLogout />
                </FloatingActionButton>
            </FlexContainer>
        </StyledHomeNavbar>
    );
}

export default Navbar