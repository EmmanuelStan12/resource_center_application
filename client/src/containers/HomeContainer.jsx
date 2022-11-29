import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import Drawer from '../components/Drawer';
import { HomeNavbar } from '../components/Navbar'
import Box from '../styles/StyledBox'
import { StyledDrawerNavigation } from '../styles/StyledDrawerNavigation';

const HomeContainer = () => {

  const [isOpen, open] = useState(false);
  const navigate = useNavigate()
  const location = useLocation()
  const userState = useSelector(state => state.userReducer);

  useEffect(() => {
    const data = userState.data;
    if (data === null || data.user === null) {
        navigate('/login', { replace: true });
    }
  }, [location.pathname]);

  useEffect(() => {
    const data = userState.data;
    if (data === null || data.user === null) {
        navigate('/login', { replace: true });
    }
  }, [])

  return (
    <Box height='100vh' className='scrollbar'>
      <StyledDrawerNavigation height='100%'>
        <HomeNavbar open={open} />
        <Drawer isOpen={isOpen} open={open} />
        <Outlet />
      </StyledDrawerNavigation>
    </Box>
  )
}

export default HomeContainer