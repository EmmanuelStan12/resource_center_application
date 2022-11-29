import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Box from '../styles/StyledBox'

const AuthContainer = () => {
  const userState = useSelector(state => state.userReducer);
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const data = userState.data;
    if (data && data.user !== null) {
      navigate('/dashboard', {replace: true})
    }
  }, [userState])

  return (
    <Box padding='2.3rem 0 0 0'>
      <Navbar />
      <Outlet />
    </Box>
  )
}

export default AuthContainer