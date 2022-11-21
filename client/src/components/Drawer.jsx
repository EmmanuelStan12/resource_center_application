import React from 'react'
import { FloatingActionButton } from '../styles/StyledButton';
import { NavbarTitle } from '../styles/StyledNavbar';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Divider, DrawerOverlay, StyledDrawer, StyledDrawerItem } from '../styles/StyledDrawerNavigation';
import { AiOutlineHome } from 'react-icons/ai';
import { BsCalendar4Event } from 'react-icons/bs'
import { IoMdSchool, IoMdNotificationsOutline } from 'react-icons/io'
import {AiOutlineMail } from 'react-icons/ai'
import { BiCodeAlt } from 'react-icons/bi'
import DrawerItem from './DrawerItem';
import { useLocation } from 'react-router-dom';
import {FiUsers} from 'react-icons/fi'

const DrawerTitle = ({ open }) => {
    return (
        <StyledDrawerItem width='100%' height='fit-content' gap='7px'>
            <FloatingActionButton onClick={() => open(prev => !prev)} size={40}>
                <GiHamburgerMenu />
            </FloatingActionButton>
            <NavbarTitle spanColor='#121212'>
                Intern  <span>Corp</span>
            </NavbarTitle>
        </StyledDrawerItem>
    )
}

const drawerItems = [
    {
        icon: AiOutlineHome,
        title: "Home",
        route: '/dashboard'
    },
    {
        icon: BsCalendar4Event,
        title: "Events",
        route: '/dashboard/events'
    },
    {
        icon: IoMdSchool,
        title: "Curriculum",
        route: '/dashboard/curriculum'
    },
    {
        icon: AiOutlineMail,
        title: "Inbox",
        route: '/dashboard/inbox'
    },
    {
        icon: IoMdNotificationsOutline,
        title: "Notifications",
        route: '/dashboard/notifications'
    },
    {
        icon: BiCodeAlt,
        title: "Challenge",
        route: "/dashboard/challenge"
    },
    {
        icon: FiUsers,
        title: "Users",
        route: '/dashboard/users'
    }
]

const Drawer = ({ open, isOpen }) => {
    const location = useLocation()
    const path = location.pathname
    
    return (
        <>
        <DrawerOverlay className={isOpen && 'active'} onClick={() => open(false)} />
        <StyledDrawer className={isOpen && 'active'}>
            <DrawerTitle open={open} />
            <Divider></Divider>
            {drawerItems.map((item) => {
                const isActive = path === item.route
                return (
                <DrawerItem onClick={open} key={item.title} item={item} active={isActive} />
            )})}
        </StyledDrawer>
        </>
    )
}

export default Drawer