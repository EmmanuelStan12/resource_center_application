import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { FloatingActionButton } from '../styles/StyledButton';
import { Divider, StyledDrawerItem } from '../styles/StyledDrawerNavigation';
import Text from '../styles/StyledText'

const DrawerItem = ({ item, active = false }) => {
    const { icon, title, route } = item;
    const Icon = icon;
    return (
        <>
        <NavLink 
        to={route}
        style={{ textDecoration: 'none' }}>
            <StyledDrawerItem alignItems='center' width='100%' height='fit-content' gap='7px'>
                <FloatingActionButton color={active ? 'primary': '#121212'} variant='transparent' size={40}>
                    <Icon />
                </FloatingActionButton>
                <Text color={active ? 'primary': '#121212'} as='p' variant='p'>{title}</Text>
            </StyledDrawerItem>
            <Divider background={active ? 'primary': 'transparent'}></Divider>
        </NavLink>
        </>
    )
}

export default DrawerItem