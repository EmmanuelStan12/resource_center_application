import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Drawer from '../components/Drawer';
import { HomeNavbar } from '../components/Navbar'
import Box from '../styles/StyledBox'
import { StyledDrawerNavigation } from '../styles/StyledDrawerNavigation';

const HomeContainer = () => {

  const [isOpen, open] = useState(false)

  return (
    <Box>
      <StyledDrawerNavigation>
        <HomeNavbar open={open} />
        <Drawer isOpen={isOpen} open={open} />
        <Outlet />
      </StyledDrawerNavigation>
    </Box>
  )
}

export default HomeContainer